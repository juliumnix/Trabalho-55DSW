package br.com.trabalho.droneseta.controller;

import br.com.trabalho.droneseta.DAO.ClienteDAO;
import br.com.trabalho.droneseta.DAO.ProdutoCarrinhoDAO;
import br.com.trabalho.droneseta.DAO.ProdutoDAO;
import br.com.trabalho.droneseta.model.bean.Cliente;
import br.com.trabalho.droneseta.model.bean.Produto;
import br.com.trabalho.droneseta.model.bean.ProdutoCarrinho;
import br.com.trabalho.droneseta.model.bean.Venda;
import br.com.trabalho.droneseta.repository.RepositorioCliente;
import br.com.trabalho.droneseta.repository.RepositorioProduto;
import br.com.trabalho.droneseta.repository.RepositorioProdutoCarrinho;
import br.com.trabalho.droneseta.repository.RepositorioVenda;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ControladorCliente {
    
    @Autowired
    RepositorioCliente repositorioCliente;
    
    @Autowired
    RepositorioProduto repositorioProduto;
    
    @Autowired
    RepositorioProdutoCarrinho repositorioProdutoCarrinho;
    
    @Autowired
    RepositorioVenda repositorioVenda;
    
    @PutMapping("/clientes/{id}")
    public ResponseEntity<Cliente> atualizarCliente(@PathVariable("id") long id, @Valid @RequestBody Cliente clienteAtualizado) {
        Cliente cliente = ClienteDAO.procurarCliente(id, repositorioCliente);
        if(cliente != null) {
            cliente.setNome(clienteAtualizado.getNome());
            cliente.setEmail(clienteAtualizado.getEmail());
            cliente.setSenha(clienteAtualizado.getSenha());
            cliente.setCpf(clienteAtualizado.getCpf());
            cliente.setNumCartao(clienteAtualizado.getNumCartao());
            cliente.setEndCobranca(clienteAtualizado.getEndCobranca());
            cliente.setEndEntrega(clienteAtualizado.getEndEntrega());
            return new ResponseEntity<>(repositorioCliente.save(cliente), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @PutMapping("/clientes/{idCliente}/carrinho/{idProdutoCarrinho}")
    public ResponseEntity<Cliente> atualizarProdutoCarrinhoDoCliente(@PathVariable("idCliente") long idCliente, @PathVariable("idProdutoCarrinho") long idProdutoCarrinho, @RequestBody ProdutoCarrinho produtoCarrinhoAtualizado) {
        Cliente cliente = ClienteDAO.procurarCliente(idCliente, repositorioCliente);
        ProdutoCarrinho produtoCarrinho = ProdutoCarrinhoDAO.procurarProdutoCarrinho(idProdutoCarrinho, repositorioProdutoCarrinho);
        if(cliente != null && produtoCarrinho != null) {
            if(produtoCarrinhoAtualizado.getQuantidade() > 0) {
                if(cliente.getCarrinho().contains(produtoCarrinho)) {
                    produtoCarrinho.setQuantidade(produtoCarrinhoAtualizado.getQuantidade());
                    return new ResponseEntity<>(repositorioCliente.save(cliente), HttpStatus.OK);
                }
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return deletarProdutoCarrinhoDoCliente(idCliente, idProdutoCarrinho);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<HttpStatus> deletarCliente(@PathVariable("id") long id) {
        try {
            Cliente cliente = ClienteDAO.procurarCliente(id, repositorioCliente);
            if(cliente != null) {
                repositorioCliente.deleteById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/clientes/{idCliente}/carrinho/{idProdutoCarrinho}")
    public ResponseEntity<Cliente> deletarProdutoCarrinhoDoCliente(@PathVariable("idCliente") long idCliente, @PathVariable("idProdutoCarrinho") long idProdutoCarrinho) {
        try {
            Cliente cliente = ClienteDAO.procurarCliente(idCliente, repositorioCliente);
            ProdutoCarrinho produtoCarrinho = ProdutoCarrinhoDAO.procurarProdutoCarrinho(idProdutoCarrinho, repositorioProdutoCarrinho);
            if(cliente != null && produtoCarrinho != null) {
                if(cliente.getCarrinho().contains(produtoCarrinho)) {
                    cliente.getCarrinho().remove(produtoCarrinho);
                    return new ResponseEntity<>(repositorioCliente.save(cliente), HttpStatus.OK);
                }
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping("/clientes")
    public ResponseEntity<Cliente> publicarCliente(@Valid @RequestBody Cliente cliente) {
        cliente.setCarrinho(new ArrayList<>());
        cliente.setCompras(new ArrayList<>());
        return new ResponseEntity<>(repositorioCliente.save(cliente), HttpStatus.OK);
    }
    
    @PostMapping("/clientes/{id}/carrinho")
    public ResponseEntity<Cliente> publicarProdutoCarrinhoNoCliente(@PathVariable("id") long id, @Valid @RequestBody ProdutoCarrinho produtoCarrinho) {
        Cliente cliente = ClienteDAO.procurarCliente(id, repositorioCliente);
        if(cliente != null) {
            Produto produto = ProdutoDAO.procurarProduto(produtoCarrinho.getProduto().getId(), repositorioProduto);
            if (produto != null) {
                for(ProdutoCarrinho pC : cliente.getCarrinho()) {
                    if(pC.getProduto().getId() == produto.getId()) {
                        pC.setQuantidade(pC.getQuantidade() + produtoCarrinho.getQuantidade());
                        return new ResponseEntity<>(repositorioCliente.save(cliente), HttpStatus.OK);
                    }
                }
                cliente.getCarrinho().add(produtoCarrinho);
                return new ResponseEntity<>(repositorioCliente.save(cliente), HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @PostMapping("/clientes/{id}/compras")
    public ResponseEntity<Venda> publicarCompraNoCliente(@PathVariable("id") long id, @Valid @RequestBody Venda venda) {
        Cliente cliente = ClienteDAO.procurarCliente(id, repositorioCliente);
        if (cliente != null) {
            venda.setCliente(cliente);
            return new ResponseEntity<>(repositorioVenda.save(venda), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @GetMapping("/clientes/email/{email}")
    public Cliente recuperaClientePeloEmail(@PathVariable String email) {
        return repositorioCliente.findByEmail(email).get();
    }
    
    @GetMapping("/clientes/email/{email}/{senha}")
    public String login(@PathVariable String email, @PathVariable String senha) throws Exception {
        String haveAccount = ClienteDAO.temContaCriada(email, senha, repositorioCliente);
        return haveAccount;
    }
    
    @GetMapping("/clientes/{id}")
    public ResponseEntity<Cliente> recuperarCliente(@PathVariable("id") long id) {
        try {
            Cliente cliente = ClienteDAO.procurarCliente(id, repositorioCliente);
            if(cliente != null) {
                return new ResponseEntity<>(cliente, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/clientes")
    public ResponseEntity<List<Cliente>> recuperarClientes() {
        try {
            return new ResponseEntity<>(repositorioCliente.findAll(), HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/clientes/{idCliente}/carrinho/{idProdutoCarrinho}")
    public ResponseEntity<ProdutoCarrinho> recuperarProdutoCarrinhoDoCliente(@PathVariable("idCliente") long idCliente, @PathVariable("idProdutoCarrinho") long idProdutoCarrinho) {
        Cliente cliente = ClienteDAO.procurarCliente(idCliente, repositorioCliente);
        ProdutoCarrinho produtoCarrinho = ProdutoCarrinhoDAO.procurarProdutoCarrinho(idProdutoCarrinho, repositorioProdutoCarrinho);
        if(cliente != null && produtoCarrinho != null) {
            if(cliente.getCarrinho().contains(produtoCarrinho)) {
                return new ResponseEntity<>(produtoCarrinho, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @GetMapping("/clientes/{idCliente}/carrinho")
    public ResponseEntity<List<ProdutoCarrinho>> recuperarProdutosCarrinhoDoCliente(@PathVariable("idCliente") long idCliente) {
        Cliente cliente = ClienteDAO.procurarCliente(idCliente, repositorioCliente);
        if(cliente != null) {
            return new ResponseEntity<>(cliente.getCarrinho(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @GetMapping("/clientes/{id}/compras")
    public ResponseEntity<List<Venda>> recuperarComprasDoCliente(@PathVariable("id") long id) {
        Cliente cliente = ClienteDAO.procurarCliente(id, repositorioCliente);
        if (cliente != null) {
            return new ResponseEntity<>(cliente.getCompras(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
