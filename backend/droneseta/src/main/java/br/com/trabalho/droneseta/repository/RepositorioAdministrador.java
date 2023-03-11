package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.Administrador;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioAdministrador extends JpaRepository<Administrador, Long> {
}
