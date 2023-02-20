package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.Venda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioVenda extends JpaRepository<Venda, Long> {
}
