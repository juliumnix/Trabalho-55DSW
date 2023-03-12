package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Administrador;
import br.com.trabalho.droneseta.repository.RepositorioAdministrador;

import java.util.Optional;

public class AdministradorDAO {

    public static Administrador procurarAdministrador(long id, RepositorioAdministrador repositorioAdministrador) {
        Optional<Administrador> administrador = repositorioAdministrador.findById(id);
        return administrador.isPresent() ? administrador.get() : null;
    }

    public static String temLoginAdministrador(String email, String pass, RepositorioAdministrador repositorioAdministrador) {
        Optional<Administrador> administrador = repositorioAdministrador.findByEmail(email);
        if (administrador.isPresent()) {
            if (administrador.get().getSenha().equals(pass)) {
                return "Logou";
            } else {
                return "Senha incorreta";
            }
        }
        return "Conta não existe";
    }
}
