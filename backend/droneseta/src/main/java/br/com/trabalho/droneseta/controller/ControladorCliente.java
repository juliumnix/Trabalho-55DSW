package br.com.trabalho.droneseta.controller;

import br.com.trabalho.droneseta.DAO.ClienteDAO;
import br.com.trabalho.droneseta.model.bean.Cliente;
import br.com.trabalho.droneseta.repository.RepositorioCliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static br.com.trabalho.droneseta.DAO.ClienteDAO.procurarCliente;

@CrossOrigin
@RestController
public class ControladorCliente {
    
    @Autowired
    RepositorioCliente repositorioCliente;
    

    
    @PutMapping("/clientes/{id}")
    public ResponseEntity<Cliente> atualizarCliente(@PathVariable("id") long id, @RequestBody Cliente clienteAtualizado) {
        Cliente cliente = ClienteDAO.procurarCliente(id, repositorioCliente);
        if (cliente != null) {
            cliente.setNome(clienteAtualizado.getNome());
            cliente.setEmail(clienteAtualizado.getEmail());
            cliente.setSenha(clienteAtualizado.getSenha());
            cliente.setCpf(clienteAtualizado.getCpf());
            cliente.setNumCartao(clienteAtualizado.getNumCartao());
            cliente.setEndCobranca(clienteAtualizado.getEndCobranca());
            cliente.setEndEntrega(clienteAtualizado.getEndEntrega());
            cliente.setCarrinho(clienteAtualizado.getCarrinho());
            return new ResponseEntity<>(repositorioCliente.save(cliente), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<HttpStatus> deletarCliente(@PathVariable("id") long id) {
        try {
            Cliente cliente = ClienteDAO.procurarCliente(id, repositorioCliente);
            if (cliente != null) {
                repositorioCliente.deleteById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping("/clientes")
    public ResponseEntity<Cliente> publicarCliente(@RequestBody Cliente cliente) {
        return new ResponseEntity<>(repositorioCliente.save(cliente), HttpStatus.OK);
    }
    
    @GetMapping("/clientes/{id}")
    public ResponseEntity<Cliente> recuperarCliente(@PathVariable("id") long id) {
        try {
            Cliente cliente = ClienteDAO.procurarCliente(id, repositorioCliente);
            if (cliente != null) {
                return new ResponseEntity<>(cliente, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/clientes")
    public ResponseEntity<List<Cliente>> recuperarClientes() {
        try {
            return new ResponseEntity<>(repositorioCliente.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
