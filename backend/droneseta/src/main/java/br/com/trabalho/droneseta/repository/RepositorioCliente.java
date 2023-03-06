package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepositorioCliente extends JpaRepository<Cliente, Long> {
    public Optional<Cliente> findByEmail(String email);
}
