package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioAdministrador extends JpaRepository<Administrador, Long> {
}
