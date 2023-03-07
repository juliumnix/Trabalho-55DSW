package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;

@Entity
@Table(name = "produtos_carrinho")
public class ProdutoCarrinho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    private Produto produto;
    
    @ManyToOne(fetch = FetchType.EAGER)
    private Tamanho tamanho;
    
    @Min(1)
    private int quantidade;

    public ProdutoCarrinho() {}

    public ProdutoCarrinho(Produto produto, Tamanho tamanho, int quantidade) {
        this.produto = produto;
        this.tamanho = tamanho;
        this.quantidade = quantidade;
    }
    
    public long getId() {
        return id;
    }
    
    public void setId(long id) {
        this.id = id;
    }
    
    public Produto getProduto() {
        return produto;
    }
    
    public void setProduto(Produto produto) {
        this.produto = produto;
    }
    
    public Tamanho getTamanho() {
        return tamanho;
    }
    
    public void setTamanho(Tamanho tamanho) {
        this.tamanho = tamanho;
    }
    
    public int getQuantidade() {
        return quantidade;
    }
    
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
    
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{")
                .append("'").append("id").append("'").append(": ")
                .append(id).append(", ")
                .append("'").append("produto").append("'").append(": ")
                .append(produto.toString()).append(", ")
                .append("'").append("Tamanho").append("'").append(": ")
                .append(tamanho.toString()).append(", ")
                .append("'").append("quantidade").append("'").append(": ")
                .append(quantidade).append("}");
        return sb.toString();
    }
}
