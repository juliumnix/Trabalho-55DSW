package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
@Table(name = "produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Size(min = 1)
    private String descricao;

    @Column(name = "url_imagem")
    @Size(min = 1)
    private String urlImagem;

    @Column(scale = 2)
    @Min(0)
    private double preco;
    
    @ManyToMany(fetch = FetchType.EAGER)
    private List<Tamanho> tamanhos;
    
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Estoque> estoques;

    public Produto() {}

    public Produto(String descricao, String urlImagem, double preco, List<Tamanho> tamanhos, List<Estoque> estoques) {
        this.descricao = descricao;
        this.urlImagem = urlImagem;
        this.preco= preco;
        this.tamanhos = tamanhos;
        this.estoques = estoques;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public List<Tamanho> getTamanhos() {
        return tamanhos;
    }

    public void setTamanhos(List<Tamanho> tamanhos) {
        this.tamanhos = tamanhos;
    }
    
    public List<Estoque> getEstoques() {
        return estoques;
    }
    
    public void setEstoques(List<Estoque> estoques) {
        this.estoques = estoques;
    }
    
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{")
                .append("'").append("id").append("'").append(": ")
                .append(id).append(", ")
                .append("'").append("descricao").append("'").append(": ")
                .append("'").append(descricao).append("'").append(", ")
                .append("'").append("urlImagem").append("'").append(": ")
                .append("'").append(urlImagem).append("'").append(", ")
                .append("'").append("preco").append("'").append(": ")
                .append(preco).append(", ")
                .append("'").append("tamanhos").append("'").append(": ")
                .append("[");
        for (int i = 0; i < tamanhos.size(); i++) {
            if (i > 0) sb.append(", ");
            sb.append(tamanhos.get(i).toString());
        }
        sb.append("]").append(", ")
                .append("'").append("estoques").append("'").append(": ");
        sb.append("[");
        for (int i = 0; i < estoques.size(); i++) {
            if (i > 0) sb.append(", ");
            sb.append(estoques.get(i).toString());
        }
        sb.append("]").append("}");
        return sb.toString();
    }
}
