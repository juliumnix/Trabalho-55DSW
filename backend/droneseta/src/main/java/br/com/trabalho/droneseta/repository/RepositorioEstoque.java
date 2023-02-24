package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioEstoque extends JpaRepository<Estoque, Long> {
}
