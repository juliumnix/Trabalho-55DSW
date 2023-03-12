package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepositorioAdministrador extends JpaRepository<Administrador, Long> {
    public Optional<Administrador> findByEmail(String email);
}
