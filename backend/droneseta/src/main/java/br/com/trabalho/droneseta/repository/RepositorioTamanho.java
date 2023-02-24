package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.Tamanho;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioTamanho extends JpaRepository<Tamanho, Long> {
}
