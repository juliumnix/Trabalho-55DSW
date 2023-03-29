package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.HistoricoDrone;
import br.com.trabalho.droneseta.repository.RepositorioHistoricoDrone;

import java.util.Optional;

public class HistoricoDroneDAO {
    
    public static HistoricoDrone procurarHistoricoDrone(long id, RepositorioHistoricoDrone repositorioHistoricoDrone) {
        Optional<HistoricoDrone> historicoDrone = repositorioHistoricoDrone.findById(id);
        return historicoDrone.isPresent() ? historicoDrone.get() : null;
    }
}
