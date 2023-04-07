package br.com.trabalho.droneseta.controller;

import br.com.trabalho.droneseta.DAO.VendaDAO;
import br.com.trabalho.droneseta.model.bean.ProdutoCarrinho;
import br.com.trabalho.droneseta.model.bean.Venda;
import br.com.trabalho.droneseta.model.dtos.VendaDTO;
import br.com.trabalho.droneseta.repository.RepositorioCliente;
import br.com.trabalho.droneseta.repository.RepositorioVenda;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "*")
@RestController
public class ControladorVenda {
    
    @Autowired
    RepositorioVenda repositorioVenda;
    
    @Autowired
    RepositorioCliente repositorioCliente;
    
    @PutMapping("/vendas/{id}")
    public ResponseEntity<Venda> atualizarVenda(@PathVariable("id") long id, @Valid @RequestBody Venda vendaAtualizada) {
        Venda venda = VendaDAO.procurarVenda(id, repositorioVenda);
        if (venda != null) {
            venda.setCliente(vendaAtualizada.getCliente());
            venda.getProdutos().clear();
            venda.getProdutos().addAll(venda.getProdutos());
            venda.setValor(vendaAtualizada.getValor());
            venda.setPagAprovado(vendaAtualizada.isPagAprovado());
            venda.setEntregue(vendaAtualizada.isEntregue());
            return new ResponseEntity<>(repositorioVenda.save(venda), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @PutMapping("/vendas/{id}/entregar")
    public ResponseEntity<Venda> entregarVenda(@PathVariable("id") long id) {
        Venda venda = VendaDAO.procurarVenda(id, repositorioVenda);
        if (venda != null) {
            venda.setEntregue(true);
            return new ResponseEntity<>(repositorioVenda.save(venda), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping("/vendas/{id}")
    public ResponseEntity<HttpStatus> deletarVenda(@PathVariable("id") long id) {
        try {
            Venda venda = VendaDAO.procurarVenda(id, repositorioVenda);
            if (venda != null) {
                repositorioVenda.deleteById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/vendas/{id}")
    public ResponseEntity<Venda> recuperarVenda(@PathVariable("id") long id) {
        try {
            Venda venda = VendaDAO.procurarVenda(id, repositorioVenda);
            if (venda != null) {
                return new ResponseEntity<>(venda, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/vendas/{id}/espera")
    public ResponseEntity<Integer> recuperarTempoEspera(@PathVariable("id") long id) {
        try {
            List<Venda> vendas = repositorioVenda.findAll();
            if (vendas.stream().anyMatch(v -> v.getId() == id)) {
                int tempo = 0;
                List<VendaDTO> vendasDTO = new ArrayList<>();
                List<VendaDTO> esperando = new ArrayList<>();
                List<VendaDTO> separando = new ArrayList<>();
                
                vendas.stream()
                        .filter(v -> !v.isEntregue())
                        .sorted(Comparator.comparing(Venda::getId))
                        .sorted(Comparator.comparing(v -> v.getProdutos().stream().mapToInt(ProdutoCarrinho::getQuantidade).sum(), Comparator.reverseOrder()))
                        .forEach(v -> vendasDTO.add(new VendaDTO(v)));
                
                
                
                
                externo:
                while (true) {
                    int enviando = 0;
                    List<VendaDTO> bagagem = new ArrayList<>();
                    for (int i = 0; i < esperando.size();) {
                        VendaDTO v = esperando.get(i);
                        v.diminuirTempoEspera();
                        if (v.getTempoEspera() < 1) {
                            separando.add(v);
                            esperando.remove(v);
                        } else {
                            i++;
                        }
                    }
    
                    for (int i = 0; i < separando.size();) {
                        if(enviando < 10) {
                            VendaDTO v = separando.get(i);
                            if (bagagem.stream().noneMatch(x -> x.getIdCliente() == v.getIdCliente())) {
                                tempo++;
                            }
                            bagagem.add(v);
                            if(v.getQuantidadeRestante() + enviando <= 10 ) {
                                if (v.getId() == id) {
                                    break externo;
                                }
                                enviando += v.getQuantidadeRestante();
                                separando.remove(v);
                            } else {
                                enviando = 10;
                                v.setQuantidadeRestante(v.getQuantidadeRestante() - 10);
                                i++;
                            }
                        } else {
                            break;
                        }
                    }
                    
                    for(int i = 0; i < vendasDTO.size(); ) {
                        if(enviando < 10) {
                            VendaDTO v = vendasDTO.get(i);
                            if(v.getQuantidadeTotal() <= 10) {
                                if(v.getQuantidadeTotal() + enviando <= 10) {
                                    if (bagagem.stream().noneMatch(x -> x.getIdCliente() == v.getIdCliente())) {
                                        tempo++;
                                    }
                                    bagagem.add(v);
                                    if (v.getId() == id) {
                                        break externo;
                                    }
                                    enviando += v.getQuantidadeTotal();
                                    vendasDTO.remove(v);
                                } else {
                                    i++;
                                }
                            } else {
                                v.resetarTempoEspera();
                                esperando.add(v);
                                vendasDTO.remove(v);
                            }
                        } else {
                            break;
                        }
                    }
    
                    while(enviando < 10 && (esperando.size() > 0 || separando.size() > 0)) {
                        if (separando.size() == 0) {
                            VendaDTO v = esperando.remove(0);
                            if(v != null) {
                                if (bagagem.stream().noneMatch(x -> x.getIdCliente() == v.getIdCliente())) {
                                    tempo++;
                                }
                                bagagem.add(v);
                                v.setQuantidadeRestante(v.getQuantidadeRestante() - (10 - enviando));
                                separando.add(v);
                                enviando = 10;
                            }
                        } else {
                            VendaDTO v = separando.get(0);
                            if (bagagem.stream().noneMatch(x -> x.getIdCliente() == v.getIdCliente())) {
                                tempo++;
                            }
                            bagagem.add(v);
                            if (enviando + v.getQuantidadeRestante() <= 10) {
                                if (v.getId() == id) {
                                    break externo;
                                }
                                enviando += v.getQuantidadeRestante();
                                separando.remove(0);
                            } else {
                                v.setQuantidadeRestante(v.getQuantidadeRestante() - (10 - enviando));
                                enviando = 0;
                            }
                        }
                    }
                }

                return new ResponseEntity<>(tempo, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/vendas")
    public ResponseEntity<List<Venda>> recuperarVendas() {
        try {
            return new ResponseEntity<>(repositorioVenda.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
