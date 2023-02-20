package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioCliente extends JpaRepository<Cliente, Long> {
}
