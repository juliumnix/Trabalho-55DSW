package br.com.trabalho.droneseta;

import br.com.trabalho.droneseta.controller.ControladorVenda;
import br.com.trabalho.droneseta.model.bean.ProdutoCarrinho;
import br.com.trabalho.droneseta.model.bean.Venda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.*;

@SpringBootApplication
@EnableScheduling
public class DronesetaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DronesetaApplication.class, args);
	}
	
	@Component
	private class Drone {
		private final int quantidadeMaximaPorEntrega = 10;
		private final Queue<VendaDTO> vendasAcimaDoLimiteEmEspera = new ArrayDeque<>();
		private final Queue<VendaDTO> vendasEnviandoProdutosSeparados = new ArrayDeque<>();
		
		@Autowired
		private ControladorVenda controladorVenda;
		
		@Scheduled(fixedRate = 8000)
		private void entrega() {
			int quantidadeParaEntregar = 0;
			List<VendaDTO> vendasParaEntregar = new ArrayList<>();
			List<VendaDTO> vendasDTO = new ArrayList<>();
			List<VendaDTO> vendasDTOOrdenadas= new ArrayList<>();
			
			/*
			  Diminui o tempo de espera das vendasDTO presentes na Queue vendasAcimaDoLimiteEmEspera a cada iteração e,
			  caso o tempo se torne menor que 1, passa a vendaDTO para a Queue vendasEnviandoProdutosSeparados.
			 */
			vendasAcimaDoLimiteEmEspera.forEach(v -> {
				v.diminuirTempoEspera();
				if (v.tempoEspera < 1) {
					vendasEnviandoProdutosSeparados.add(v);
				}
			});
			vendasAcimaDoLimiteEmEspera.removeAll(vendasEnviandoProdutosSeparados);

			
			/*
			  Percorre a lista vendasEnviandoProdutosSeparados, e para cada vendaDTO verifica:
			  
			  Se a quantidade de produtos restantes nessa vendaDTO, somado a quantidadeParaEntregar, for menor que a
			  quantidade limite -> adiciona essa quantidade restante a contade de quantidadeParaEntregar e adiciona a
			  vendaDTO a lista vendasParaEntregar para que o parametro de entregue seja atualizado indicando o término
			  da entrega da venda.
			  
			  Se não, diminui a quantidade, representadada diferença da MaximaPorEntrega pela quantidadeParaEntregar,
			  da quantidade restante atual da vendaDTO.
			  Obs.: Nesse caso não adiciona na lista vendasParaEntregar para setar o parametro como verdadeiro porque
			  ainda haverão peças para serem entregues.
			 */
			for (VendaDTO v : vendasEnviandoProdutosSeparados) {
				if (quantidadeParaEntregar < quantidadeMaximaPorEntrega) {
					if (quantidadeParaEntregar + v.getQuantidade() <= quantidadeMaximaPorEntrega) {
						quantidadeParaEntregar += v.getQuantidade();
						vendasParaEntregar.add(v);
					} else {
						v.setQuantidade(v.getQuantidade() - (quantidadeMaximaPorEntrega - quantidadeParaEntregar));
						quantidadeParaEntregar = quantidadeMaximaPorEntrega;
					}
				} else {
					break;
				}
			}
			vendasEnviandoProdutosSeparados.removeAll(vendasParaEntregar);
			
			if (quantidadeParaEntregar < quantidadeMaximaPorEntrega) {
				List<Venda> vendas = controladorVenda.recuperarVendas().getBody();
				
				if(vendas != null && vendas.size() > 0) {
					/*
					  Filtra as vendas para que a lista vendasDTO não tenha produtos entregues, nem vendas já
					  dicionadas na Queue vendasAcimaDoLimiteEmEspera ou na Queue vendasEnviandoProdutosSepadaros.
					 */
					vendas.stream().filter(v -> !v.isEntregue()).filter(v -> vendasAcimaDoLimiteEmEspera.stream().noneMatch(x -> x.getId() == v.getId()) && vendasEnviandoProdutosSeparados.stream().noneMatch(x -> x.getId() == v.getId()) && vendasParaEntregar.stream().noneMatch(x -> x.getId() == v.getId())).forEach(v -> vendasDTO.add(new VendaDTO(v)));
					
					if(vendasDTO.size() > 0) {
						/*
						  Organiza a lista de modo que as vendasDTO com mais itens fiquem na frente e, caso hajam
						  vendasDTO com quantidades iguais, são organizados pelo seus id de modo crescente.
						 */
						vendasDTO.stream().sorted(Comparator.comparing(VendaDTO::getId)).sorted(Comparator.comparing(VendaDTO::getQuantidade, Comparator.reverseOrder())).forEach(vendasDTOOrdenadas::add);
						
						/*
						  Para cada vendaDTO, verifica se a quantidade está apta a ser entregue diretamente ou se deve
						  ser adicionada na Queue vendasAcimaDoLimiteEmEspera. Caso esteja dentro do limite verifica
						  se a soma da quantidadeParaEntregar atual com a quantidade da vendaDTO não ultrapassará o
						  limite estabelecido. Caso não ultrapasse adiciona a lista vendasParaEntregar para atualizar
						  seu parâmetro isEntregue.
						 */
						for(VendaDTO v : vendasDTOOrdenadas) {
							if(v.getQuantidade() <= 10) {
								if((quantidadeParaEntregar + v.getQuantidade()) <= quantidadeMaximaPorEntrega) {
									quantidadeParaEntregar += v.getQuantidade();
									vendasParaEntregar.add(v);
								}
							} else {
								v.resetarTempoEspera();
								vendasAcimaDoLimiteEmEspera.add(v);
							}
						}
					}
				}
				while(quantidadeParaEntregar < quantidadeMaximaPorEntrega && (vendasAcimaDoLimiteEmEspera.size() > 0 || vendasEnviandoProdutosSeparados.size() > 0)) {
					if (vendasEnviandoProdutosSeparados.size() == 0) {
						VendaDTO v = vendasAcimaDoLimiteEmEspera.poll();
						v.setQuantidade(v.getQuantidade() - (quantidadeMaximaPorEntrega - quantidadeParaEntregar));
						vendasEnviandoProdutosSeparados.add(v);
						quantidadeParaEntregar = quantidadeMaximaPorEntrega;
					} else {
						VendaDTO v = vendasEnviandoProdutosSeparados.peek();
						if (quantidadeParaEntregar + v.getQuantidade() <= quantidadeMaximaPorEntrega) {
							vendasParaEntregar.add(v);
							quantidadeParaEntregar += v.getQuantidade();
							vendasEnviandoProdutosSeparados.poll();
						} else {
							v.setQuantidade(v.getQuantidade() - (quantidadeMaximaPorEntrega - quantidadeParaEntregar));
							quantidadeParaEntregar = quantidadeMaximaPorEntrega;
						}
					}
				}
				

			}
			System.out.println("----------------------");
			System.out.println("vendasDTOOrdenadas:");
			vendasDTOOrdenadas.forEach(System.out::println);
			System.out.println("\nvendasParaEntregar:");
			vendasParaEntregar.forEach(System.out::println);
			System.out.println("\nvendasAcimaDoLimeteEmEspera:");
			vendasAcimaDoLimiteEmEspera.forEach(System.out::println);
			System.out.println("\nvendasEnviandoProdutosSeparados:");
			vendasEnviandoProdutosSeparados.forEach(System.out::println);
			System.out.println("----------------------");
			vendasParaEntregar.forEach(v -> controladorVenda.entregarVenda(v.getId()));
		}
	}
	
	private class VendaDTO {
		private final long id;
		private int quantidade;
		private int tempoEspera;
		
		public VendaDTO(Venda venda) {
			id = venda.getId();
			quantidade = venda.getProdutos().stream().mapToInt(ProdutoCarrinho::getQuantidade).sum();
			tempoEspera = 0;
		}
		
		public void resetarTempoEspera() {
			tempoEspera = 3;
		}
		
		public void diminuirTempoEspera() {
			tempoEspera = Math.max(tempoEspera-1, 0);
		}
		
		public long getId() {
			return id;
		}
		
		public int getQuantidade() {
			return quantidade;
		}
		
		public void setQuantidade(int quantidade) {
			this.quantidade = quantidade;
		}
		
		public int getTempoEspera() {
			return tempoEspera;
		}
		
		public String toString() {
			return "id: " + id + ", quantidade: " + quantidade + ", tempoEspera: " + tempoEspera;
		}
	}

}
