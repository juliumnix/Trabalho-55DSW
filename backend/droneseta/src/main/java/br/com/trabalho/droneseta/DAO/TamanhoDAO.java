package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Tamanho;
import br.com.trabalho.droneseta.repository.RepositorioTamanho;

import java.util.Optional;

public class TamanhoDAO {
    
    public static Tamanho procurarTamanho(long id, RepositorioTamanho repositorioTamanho) {
        Optional<Tamanho> tamanho = repositorioTamanho.findById(id);
        return tamanho.isPresent() ? tamanho.get() : null;
    }
}
