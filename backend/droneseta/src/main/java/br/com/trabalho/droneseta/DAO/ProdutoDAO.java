package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Produto;
import br.com.trabalho.droneseta.repository.RepositorioProduto;

import java.util.Optional;

public class ProdutoDAO {

    public static Produto procurarProduto(long id, RepositorioProduto repositorioProduto) {
        Optional<Produto> produto = repositorioProduto.findById(id);
        return produto.isPresent() ? produto.get() : null;
    }
}
