package br.com.trabalho.droneseta.model.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "administradores")
public class Administrador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Size(min = 1)
    private String nome;

    @Size(min = 1)
    @JsonIgnore
    private String salt;

    @Column(unique = true)
    @Size(min = 1)
    private String email;

    @Size(min = 8)
    private String senha;

    public Administrador() {}

    public Administrador(String nome, String email, String senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
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
                .append("'").append(senha).append("'").append("}");
        return sb.toString();
    }
}
