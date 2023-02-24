package br.com.trabalho.droneseta.model.bean;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;

import java.util.List;

@Entity
@Table(name = "vendas")
public class Venda {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinTable(name = "compras_cliente", joinColumns = {@JoinColumn(name = "venda_id", referencedColumnName = "id")}, inverseJoinColumns = {@JoinColumn(name = "cliente_id" , referencedColumnName = "id")})
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Cliente cliente;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Produto> produtos;

    @Column(scale = 2)
    @Min(0)
    private double valor;

    @Column(name = "is_pag_aprovado")
    private boolean isPagAprovado;

    @Column(name = "is_entregue")
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
