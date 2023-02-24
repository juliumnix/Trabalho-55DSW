package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "estoques")
public class Estoque {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @OneToOne
    @NotNull
    private Tamanho tamanho;
    
    @Min(0)
    private int quantidade;
    
    public Estoque() {
    }
    
    public Estoque(Tamanho tamanho, int quantidade) {
        this.tamanho = tamanho;
        this.quantidade = quantidade;
    }
    
    public long getId() {
        return id;
    }
    
    public void setId(long id) {
        this.id = id;
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
        return "{'id': " + id + ", 'tamanho': " + tamanho.toString() + ", 'quantidade': " + quantidade + "}";
    }
}
