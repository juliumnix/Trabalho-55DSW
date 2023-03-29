package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "historico_drone")
public class HistoricoDrone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @ManyToMany
    @JoinTable(name = "historico_drone_vendas", joinColumns = {@JoinColumn(name = "historico_drone_id", referencedColumnName = "id")}, inverseJoinColumns = {@JoinColumn(name = "venda_id" , referencedColumnName = "id")})
    private List<Venda> vendas;
    
    private int quantidadeEntregue;
    
    public HistoricoDrone() {}
    
    public HistoricoDrone(List<Venda> vendas, int quantidadeEntregue) {
        this.vendas = vendas;
        this.quantidadeEntregue = quantidadeEntregue;
    }
    
    public long getId() {
        return id;
    }
    
    public void setId(long id) {
        this.id = id;
    }
    
    public List<Venda> getVendas() {
        return vendas;
    }
    
    public void setVendas(List<Venda> vendas) {
        this.vendas = vendas;
    }
    
    public int getQuantidadeEntregue() {
        return quantidadeEntregue;
    }
    
    public void setQuantidadeEntregue(int quantidadeEntregue) {
        this.quantidadeEntregue = quantidadeEntregue;
    }
    
    public String toString() {
        StringBuilder sb = new StringBuilder("{'id': " + id + ", 'vendas': [");
        vendas.forEach(v -> sb.append(v.toString() + ", "));
        sb.deleteCharAt(sb.length() - 1);
        sb.deleteCharAt(sb.length() - 1);
        sb.append("], ").append("'quantidadeEntregue': ").append(quantidadeEntregue).append("}");
        return sb.toString();
    }
}
