package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Administrador;
import br.com.trabalho.droneseta.repository.RepositorioAdministrador;

import java.util.Optional;

public class AdministradorDAO {

    public static Administrador procurarAdministrador(long id, RepositorioAdministrador repositorioAdministrador) {
        Optional<Administrador> administrador = repositorioAdministrador.findById(id);
        return administrador.isPresent() ? administrador.get() : null;
    }
}
