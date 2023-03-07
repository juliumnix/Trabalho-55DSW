package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.ProdutoCarrinho;
import br.com.trabalho.droneseta.repository.RepositorioProdutoCarrinho;

import java.util.Optional;

public class ProdutoCarrinhoDAO {

    public static ProdutoCarrinho procurarProdutoCarrinho(long id, RepositorioProdutoCarrinho repositorioProdutoCarrinho) {
        Optional<ProdutoCarrinho> produtoCarrinho = repositorioProdutoCarrinho.findById(id);
        return produtoCarrinho.isPresent() ? produtoCarrinho.get() : null;
    }
}
