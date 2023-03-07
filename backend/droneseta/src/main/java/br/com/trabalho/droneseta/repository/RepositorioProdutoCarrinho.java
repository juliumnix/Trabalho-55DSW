package br.com.trabalho.droneseta.repository;

import br.com.trabalho.droneseta.model.bean.ProdutoCarrinho;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioProdutoCarrinho extends JpaRepository<ProdutoCarrinho, Long> {
}
