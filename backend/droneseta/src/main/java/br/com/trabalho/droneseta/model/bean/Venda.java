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

    public Venda(long id, Cliente cliente, List<Produto> produtos, double valor, boolean isPagAprovado, boolean isEntregue) {
        this(cliente, produtos, valor, isPagAprovado, isEntregue);
        this.id = id;
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
}
