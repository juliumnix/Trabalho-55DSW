package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;

import java.util.List;
import java.util.Map;
import java.util.Set;

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
            sb.append("'").append(tamanhos.get(i)).append("'");
        }
        sb.append("]").append(", ")
                .append("'").append("estoques").append("'").append(": ");
        sb.append("{");
        Set<String> keyset = estoques.keySet();
        int count = 0;
        for (String key: keyset) {
            if (count > 0) sb.append(", ");
            sb.append("'").append(key).append("'").append(": ").append(estoques.get(key));
            count++;
        }
        sb.append("}").append("}");
        return sb.toString();
    }
}
