package br.com.trabalho.droneseta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.trabalho.droneseta.model.bean.Produto;

public interface RepositorioProduto extends JpaRepository<Produto, Long> {
}
