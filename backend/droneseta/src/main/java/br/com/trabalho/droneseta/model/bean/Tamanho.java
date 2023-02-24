package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tamanhos")
public class Tamanho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Size(min = 1)
    private String sigla;
    
    public Tamanho() {}
    
    public Tamanho(String sigla) {
        this.sigla = sigla;
    }
    
    public long getId() {
        return id;
    }
    
    public void setId(long id) {
        this.id = id;
    }
    
    public String getSigla() {
        return sigla;
    }
    
    public void setSigla(String sigla) {
        this.sigla = sigla;
    }
    
    public String toString() {
        return "{'id': " + id + ", 'sigla': '"  + sigla + "'}";
    }
}
