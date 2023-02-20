package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "clientes")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String nome;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String senha;

    @Column(unique = true, nullable = false)
    private String cpf;

    @Column(name = "num_cartao", nullable = false)
    private String numCartao;

    @Column(name = "end_cobranca", nullable = false)
    private String endCobranca;

    @Column(name = "end_entrega", nullable = false)
    private String endEntrega;

    @OneToMany
    private List<Produto> carrinho;

    public Cliente() {}

    public Cliente (String nome, String email, String senha, String cpf, String numCartao, String endCobranca, String endEntrega, List<Produto> carrinho) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.numCartao = numCartao;
        this.endCobranca = endCobranca;
        this.endEntrega = endEntrega;
        this.carrinho = carrinho;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNumCartao() {
        return numCartao;
    }

    public void setNumCartao(String numCartao) {
        this.numCartao = numCartao;
    }

    public String getEndCobranca() {
        return endCobranca;
    }

    public void setEndCobranca(String endCobranca) {
        this.endCobranca = endCobranca;
    }

    public String getEndEntrega() {
        return endEntrega;
    }

    public void setEndEntrega(String endEntrega) {
        this.endEntrega = endEntrega;
    }

    public List<Produto> getCarrinho() {
        return carrinho;
    }

    public void setCarrinho(List<Produto> carrinho) {
        this.carrinho = carrinho;
    }
}
