package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;

import java.util.List;
import java.util.Map;

@Entity
@Table(name = "produtos")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String descricao;

    @Column(name = "url_imagem", nullable = false)
    private String urlImagem;

    @Column(scale = 2, nullable = false)
    private double preco;
    
    @ElementCollection
    @CollectionTable(name = "tamanhos", joinColumns = @JoinColumn(name = "id"))
    @Column(name = "sigla")
    private List<String> tamanhos;
    
    @ElementCollection
    @CollectionTable(name = "estoques", joinColumns = @JoinColumn(name = "id"))
    @MapKeyColumn(name = "sigla")
    @Column(name = "quantidade")
    private Map<String, Integer> estoques;

    public Produto() {}

    public Produto(String descricao, String urlImagem, double preco, List<String> tamanhos, Map<String, Integer> estoques) {
        this.descricao = descricao;
        this.urlImagem = urlImagem;
        this.preco= preco;
        this.tamanhos = tamanhos;
        this.estoques = estoques;
    }

    public Produto(long id, String descricao, String urlImagem, double preco, List<String> tamanhos, Map<String, Integer> estoques) {
        this(descricao, urlImagem, preco, tamanhos, estoques);
        this.id = id;
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

    public List<String> getTamanhos() {
        return tamanhos;
    }

    public void setTamanhos(List<String> tamanhos) {
        this.tamanhos = tamanhos;
    }
    
    public Map<String, Integer> getEstoques() {
        return estoques;
    }
    
    public void setEstoques(Map<String, Integer> estoques) {
        this.estoques = estoques;
    }
}
