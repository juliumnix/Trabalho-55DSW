package br.com.trabalho.droneseta.model.bean;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.List;

@Entity
@Table(name = "clientes")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Size(min = 1)
    private String nome;

    @Column(unique = true)
    @Size(min = 1)
    private String email;

    @Size(min = 8)
    private String senha;

    @Column(unique = true)
    @Size(min = 11, max = 11)
    private String cpf;

    @Column(name = "num_cartao")
    @Size(min = 13, max = 16)
    private String numCartao;

    @Column(name = "end_cobranca")
    @Size(min = 1)
    private String endCobranca;

    @Column(name = "end_entrega")
    @Size(min = 1)
    private String endEntrega;

    @OneToMany(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    private List<ProdutoCarrinho> carrinho;
    
    @OneToMany
    @JoinTable(name = "compras_cliente", joinColumns = {@JoinColumn(name = "cliente_id", referencedColumnName = "id")}, inverseJoinColumns = {@JoinColumn(name = "venda_id" , referencedColumnName = "id")})
    private List<Venda> compras;

    public Cliente() {}

    public Cliente (String nome, String email, String senha, String cpf, String numCartao, String endCobranca, String endEntrega, List<ProdutoCarrinho> carrinho, List<Venda> compras) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.numCartao = numCartao;
        this.endCobranca = endCobranca;
        this.endEntrega = endEntrega;
        this.carrinho = carrinho;
        this.compras = compras;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public List<ProdutoCarrinho> getCarrinho() {
        return carrinho;
    }

    public void setCarrinho(List<ProdutoCarrinho> carrinho) {
        this.carrinho = carrinho;
    }
    
    public List<Venda> getCompras() {
        return compras;
    }
    
    public void setCompras(List<Venda> compras) {
        this.compras = compras;
    }
    
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("{")
                .append("'").append("id").append("'").append(": ")
                .append(id).append(", ")
                .append("'").append("nome").append("'").append(": ")
                .append("'").append(nome).append("'").append(", ")
                .append("'").append("email").append("'").append(": ")
                .append("'").append(email).append("'").append(", ")
                .append("'").append("senha").append("'").append(": ")
                .append("'").append(senha).append("'").append(", ")
                .append("'").append("cpf").append("'").append(": ")
                .append("'").append(cpf).append("'").append(", ")
                .append("'").append("numCartao").append("'").append(": ")
                .append("'").append(numCartao).append("'").append(", ")
                .append("'").append("endCobranca").append("'").append(": ")
                .append("'").append(endCobranca).append("'").append(", ")
                .append("'").append("endEntrega").append("'").append(": ")
                .append("'").append(endEntrega).append("'").append("}");
        return sb.toString();
    }
}
