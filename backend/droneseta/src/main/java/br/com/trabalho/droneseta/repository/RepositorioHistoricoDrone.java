package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.HistoricoDrone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioHistoricoDrone extends JpaRepository<HistoricoDrone, Long> {
}
