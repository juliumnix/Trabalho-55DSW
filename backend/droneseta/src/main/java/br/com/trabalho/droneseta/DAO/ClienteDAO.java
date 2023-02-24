package br.com.trabalho.droneseta.DAO;

import br.com.trabalho.droneseta.model.bean.Cliente;
import br.com.trabalho.droneseta.repository.RepositorioCliente;

import java.util.Optional;

public class ClienteDAO {
    
    public static Cliente procurarCliente(long id, RepositorioCliente repositorioCliente) {
        Optional<Cliente> cliente = repositorioCliente.findById(id);
        return cliente.isPresent() ? cliente.get() : null;
    }
}
