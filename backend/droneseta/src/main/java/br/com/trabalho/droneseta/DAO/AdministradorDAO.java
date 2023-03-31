package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Administrador;
import br.com.trabalho.droneseta.model.bean.Cliente;
import br.com.trabalho.droneseta.repository.RepositorioAdministrador;
import org.mindrot.jbcrypt.BCrypt;

import java.util.Optional;

public class AdministradorDAO {

    public static Administrador procurarAdministrador(long id, RepositorioAdministrador repositorioAdministrador) {
        Optional<Administrador> administrador = repositorioAdministrador.findById(id);
        return administrador.isPresent() ? administrador.get() : null;
    }

    public static String temLoginAdministrador(String email, String pass, RepositorioAdministrador repositorioAdministrador) {
        Optional<Administrador> administrador = repositorioAdministrador.findByEmail(email);
        if (administrador.isPresent()) {
            String newPass = BCrypt.hashpw(pass, administrador.get().getSalt());
            if (validatePassWithEncryptAdmin(newPass, administrador)) {
                return "Logou";
            } else {
                return "Senha incorreta";
            }
        }
        return "Conta não existe";
    }

    private static boolean validatePassWithEncryptAdmin(String pass, Optional<Administrador> client) {
        String passEncrypted = client.get().getSenha();
        return passEncrypted.equals(pass);
    }
}
