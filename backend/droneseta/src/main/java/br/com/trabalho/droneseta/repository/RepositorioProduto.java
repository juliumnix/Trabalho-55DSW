package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioProduto extends JpaRepository<Produto, Long> {
}
