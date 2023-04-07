package br.com.trabalho.droneseta.model.dtos;

import br.com.trabalho.droneseta.model.bean.ProdutoCarrinho;
import br.com.trabalho.droneseta.model.bean.Venda;

public class VendaDTO {
    private final long id;
    private final long idCliente;
    private final int quantidadeTotal;
    private int quantidadeRestante;
    private int tempoEspera;
    
    public VendaDTO(Venda venda) {
        id = venda.getId();
        idCliente = venda.getCliente().getId();
        quantidadeTotal = venda.getProdutos().stream().mapToInt(ProdutoCarrinho::getQuantidade).sum();
        quantidadeRestante = quantidadeTotal;
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
    
    public long getIdCliente() {
        return idCliente;
    }
    
    public int getQuantidadeTotal() {
        return quantidadeTotal;
    }
    
    public int getQuantidadeRestante() {
        return quantidadeRestante;
    }
    
    public void setQuantidadeRestante(int quantidadeRestante) {
        this.quantidadeRestante = quantidadeRestante;
    }
    
    public void setTempoEspera(int tempoEspera) {
        this.tempoEspera = tempoEspera;
    }
    
    public int getTempoEspera() {
        return tempoEspera;
    }
    
    public String toString() {
        return "'id': " + id + ", 'quantidadeTotal': " + quantidadeTotal + ", 'quantidadeRestante': " + quantidadeRestante + ", 'tempoEspera': " + tempoEspera;
    }
}