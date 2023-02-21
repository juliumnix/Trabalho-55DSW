package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "vendas")
public class Venda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    private Cliente cliente;

    @OneToMany
    private List<Produto> produtos;

    @Column(scale = 2, nullable = false)
    private double valor;

    @Column(name = "is_pag_aprovado", nullable = false)
    private boolean isPagAprovado;

    @Column(name = "is_entregue", nullable = false)
    private boolean isEntregue;

    public Venda() {}

    public Venda(Cliente cliente, List<Produto> produtos, double valor, boolean isPagAprovado, boolean isEntregue) {
        this.cliente = cliente;
        this.produtos = produtos;
        this.valor = valor;
        this.isPagAprovado = isPagAprovado;
        this.isEntregue = isEntregue;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public boolean isPagAprovado() {
        return isPagAprovado;
    }

    public void setPagAprovado(boolean pagAprovado) {
        isPagAprovado = pagAprovado;
    }

    public boolean isEntregue() {
        return isEntregue;
    }

    public void setEntregue(boolean entregue) {
        isEntregue = entregue;
    }
    
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{")
                .append("'").append("id").append("'").append(": ")
                .append(id).append(", ")
                .append("'").append("cliente").append("'").append(": ")
                .append(cliente.toString()).append(", ")
                .append("'").append("produtos").append("'").append(": ")
                .append("[");
        for (int i = 0; i < produtos.size(); i++) {
            if (i > 0) sb.append(", ");
            sb.append(produtos.get(i).toString());
        }
        sb.append("]").append(", ")
                .append("'").append("valor").append("'").append(": ")
                .append(valor).append(", ")
                .append("'").append("pagAprovado").append("'").append(": ")
                .append(isPagAprovado).append(", ")
                .append("'").append("entregue").append("'").append(": ")
                .append(isEntregue).append("}");
        return sb.toString();
    }
}
