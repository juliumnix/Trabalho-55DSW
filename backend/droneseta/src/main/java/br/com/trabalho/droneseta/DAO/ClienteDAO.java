package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Cliente;
import br.com.trabalho.droneseta.repository.RepositorioCliente;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public class ClienteDAO {

    public static Cliente procurarCliente(long id, RepositorioCliente repositorioCliente) {
        Optional<Cliente> cliente = repositorioCliente.findById(id);
        return cliente.isPresent() ? cliente.get() : null;
    }

    public static String temContaCriada(String email, String senha, RepositorioCliente repositorioCliente) {
        Optional<Cliente> cliente = repositorioCliente.findByEmail(email);
        if (cliente.isPresent()) {
            if (cliente.get().getSenha().equals(senha)) {
                return "Logou";
            } else {
                return "Senha incorreta";
            }
        }
        return "Conta não existe";
    }
}
