package br.com.trabalho.droneseta.model.components;

import br.com.trabalho.droneseta.controller.ControladorHistoricoDrone;
import br.com.trabalho.droneseta.controller.ControladorVenda;
import br.com.trabalho.droneseta.model.bean.HistoricoDrone;
import br.com.trabalho.droneseta.model.bean.ProdutoCarrinho;
import br.com.trabalho.droneseta.model.bean.Venda;
import br.com.trabalho.droneseta.model.dtos.VendaDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class Drone {
    private final Queue<VendaDTO> vendasAcimaDoLimiteEmEspera = new ArrayDeque<>();
    private final Queue<VendaDTO> vendasEnviandoProdutosSeparados = new ArrayDeque<>();
    
    @Autowired
    private ControladorVenda controladorVenda;
    
    @Autowired
    private ControladorHistoricoDrone controladorHistoricoDrone;
    
    @Scheduled(fixedRate = 8000)
    private void entrega() {
        int quantidadeParaEntregar = 0;
        int quantidadeMaximaPorEntrega = 10;
        List<VendaDTO> vendasParaEntregar = new ArrayList<>();
        List<VendaDTO> vendasSendoEntregues = new ArrayList<>();
        List<VendaDTO> auxiliar = new ArrayList<>();

        vendasAcimaDoLimiteEmEspera.forEach(v -> {
            v.diminuirTempoEspera();
            if (v.getTempoEspera() < 1) {
                vendasEnviandoProdutosSeparados.add(v);
            }
        });
        vendasAcimaDoLimiteEmEspera.removeAll(vendasEnviandoProdutosSeparados);
        
        for (VendaDTO v : vendasEnviandoProdutosSeparados) {
            if (quantidadeParaEntregar < quantidadeMaximaPorEntrega) {
                vendasSendoEntregues.add(v);
                if (quantidadeParaEntregar + v.getQuantidadeRestante() <= quantidadeMaximaPorEntrega) {
                    quantidadeParaEntregar += v.getQuantidadeRestante();
                    v.setQuantidadeRestante(0);
                    auxiliar.add(v);
                } else {
                    v.setQuantidadeRestante(v.getQuantidadeRestante() - (quantidadeMaximaPorEntrega - quantidadeParaEntregar));
                    quantidadeParaEntregar = quantidadeMaximaPorEntrega;
                }
            } else {
                break;
            }
        }
        vendasEnviandoProdutosSeparados.removeAll(auxiliar);
        
        if (quantidadeParaEntregar < quantidadeMaximaPorEntrega) {
            List<Venda> vendas = controladorVenda.recuperarVendas().getBody();
            
            if(vendas != null && vendas.size() > 0) {

                vendas.stream()
                        .filter(v -> !v.isEntregue())
                        .filter(v -> vendasParaEntregar.stream().noneMatch(x -> x.getId() == v.getId())
                                && vendasAcimaDoLimiteEmEspera.stream().noneMatch(x -> x.getId() == v.getId())
                                && vendasEnviandoProdutosSeparados.stream().noneMatch(x -> x.getId() == v.getId())
                                && vendasSendoEntregues.stream().noneMatch(x -> x.getId() == v.getId()))
                        .sorted(Comparator.comparing(Venda::getId))
                        .sorted(Comparator.comparing(v -> v.getProdutos().stream().mapToInt(ProdutoCarrinho::getQuantidade).sum(), Comparator.reverseOrder()))
                        .forEach(v -> vendasParaEntregar.add(new VendaDTO(v)));
                
                if(vendasParaEntregar.size() > 0) {
                    for(VendaDTO v : vendasParaEntregar) {
                        if (quantidadeParaEntregar < quantidadeMaximaPorEntrega) {
                            if(v.getQuantidadeTotal() <= 10) {
                                if((quantidadeParaEntregar + v.getQuantidadeTotal()) <= quantidadeMaximaPorEntrega) {
                                    quantidadeParaEntregar += v.getQuantidadeTotal();
                                    v.setQuantidadeRestante(0);
                                    vendasSendoEntregues.add(v);
                                }
                            } else {
                                v.resetarTempoEspera();
                                vendasAcimaDoLimiteEmEspera.add(v);
                            }
                        } else {
                            break;
                        }
                    }
                }
            }
            
            while(quantidadeParaEntregar < quantidadeMaximaPorEntrega && (vendasAcimaDoLimiteEmEspera.size() > 0 || vendasEnviandoProdutosSeparados.size() > 0)) {
                if (vendasEnviandoProdutosSeparados.size() == 0) {
                    VendaDTO v = vendasAcimaDoLimiteEmEspera.poll();
                    if (v != null) {
                        v.setQuantidadeRestante(v.getQuantidadeRestante() - (quantidadeMaximaPorEntrega - quantidadeParaEntregar));
                        vendasSendoEntregues.add(v);
                        vendasEnviandoProdutosSeparados.add(v);
                        quantidadeParaEntregar = quantidadeMaximaPorEntrega;
                    }
                } else {
                    VendaDTO v = vendasEnviandoProdutosSeparados.peek();
                    vendasSendoEntregues.add(v);
                    if (quantidadeParaEntregar + v.getQuantidadeRestante() <= quantidadeMaximaPorEntrega) {
                        quantidadeParaEntregar += v.getQuantidadeRestante();
                        v.setQuantidadeRestante(0);
                        vendasEnviandoProdutosSeparados.poll();
                    } else {
                        v.setQuantidadeRestante(v.getQuantidadeRestante() - (quantidadeMaximaPorEntrega - quantidadeParaEntregar));
                        quantidadeParaEntregar = quantidadeMaximaPorEntrega;
                    }
                }
            }
        }
        
        System.out.println("----------------------");
        System.out.println("vendasParaEntregar:");
        vendasParaEntregar.forEach(System.out::println);
        System.out.println("\nvendasSendoEntregues:");
        vendasSendoEntregues.forEach(System.out::println);
        System.out.println("\nvendasAcimaDoLimeteEmEspera:");
        vendasAcimaDoLimiteEmEspera.forEach(System.out::println);
        System.out.println("\nvendasEnviandoProdutosSeparados:");
        vendasEnviandoProdutosSeparados.forEach(System.out::println);
        System.out.println("----------------------");
    
//        if (vendasSendoEntregues.size() > 0) {
//            List<Venda> vendasEntregues = new ArrayList<>();
//            vendasSendoEntregues.forEach(v -> {
//                ResponseEntity<Venda> venda = controladorVenda.recuperarVenda(v.getId());
//                if (venda != null && venda.hasBody()) {
//                    vendasEntregues.add(venda.getBody());
//                }
//            });
//            if (vendasEntregues.size() > 0) {
//                controladorHistoricoDrone.publicarHistoricoDrone(new HistoricoDrone(vendasEntregues, quantidadeParaEntregar));
//            }
//        }
//
//        vendasSendoEntregues.removeAll(vendasEnviandoProdutosSeparados);
//
//        vendasSendoEntregues.forEach(v -> controladorVenda.entregarVenda(v.getId()));
    }
}