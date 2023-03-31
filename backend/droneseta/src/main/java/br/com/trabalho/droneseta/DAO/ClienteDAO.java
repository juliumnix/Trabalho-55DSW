package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Cliente;
import br.com.trabalho.droneseta.repository.RepositorioCliente;
import org.mindrot.jbcrypt.BCrypt;

import java.util.Optional;

public class ClienteDAO {

    public static Cliente procurarCliente(long id, RepositorioCliente repositorioCliente) {
        Optional<Cliente> cliente = repositorioCliente.findById(id);
        return cliente.isPresent() ? cliente.get() : null;
    }

    public static String temContaCriada(String email, String senha, RepositorioCliente repositorioCliente) {
        Optional<Cliente> cliente = repositorioCliente.findByEmail(email);
        if (cliente.isPresent()) {
            String newPass = BCrypt.hashpw(senha, cliente.get().getSalt());
            if (validatePassWithEncrypt(newPass, cliente)) {
                return "Logou";
            } else {
                return "Senha incorreta";
            }
        }
        return "Conta não existe";
    }

    private static boolean validatePassWithEncrypt(String pass, Optional<Cliente> client) {
        String passEncrypted = client.get().getSenha();
        return passEncrypted.equals(pass);
    }
}
