package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Estoque;
import br.com.trabalho.droneseta.repository.RepositorioEstoque;

import java.util.Optional;

public class EstoqueDAO {
    
    public static Estoque procurarEstoque(long id, RepositorioEstoque repositorioEstoque) {
        Optional<Estoque> estoque = repositorioEstoque.findById(id);
        return estoque.isPresent() ? estoque.get() : null;
    }
}
