package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Venda;
import br.com.trabalho.droneseta.repository.RepositorioVenda;

import java.util.Optional;

public class VendaDAO {
    public static Venda procurarVenda(long id, RepositorioVenda repositorioVenda) {
        Optional<Venda> venda = repositorioVenda.findById(id);
        return venda.isPresent() ? venda.get() : null;
    }
}
