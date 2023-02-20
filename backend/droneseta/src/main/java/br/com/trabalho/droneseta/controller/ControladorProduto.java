package br.com.trabalho.droneseta.controller;

import br.com.trabalho.droneseta.DAO.ProdutoDAO;
import br.com.trabalho.droneseta.model.bean.Produto;
import br.com.trabalho.droneseta.repository.RepositorioProduto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class ControladorProduto {
    
    @Autowired
    RepositorioProduto repositorioProduto;
    
    @PutMapping("/produtos/{id}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable("id") long id, @RequestBody Produto produtoAtualizado) {
        Produto produto = ProdutoDAO.procurarProduto(id, repositorioProduto);
        if (produto != null) {
            produto.setDescricao(produtoAtualizado.getDescricao());
            produto.setUrlImagem(produtoAtualizado.getUrlImagem());
            produto.setPreco(produtoAtualizado.getPreco());
            produto.setTamanhos(produtoAtualizado.getTamanhos());
            produto.setEstoques(produtoAtualizado.getEstoques());
            return new ResponseEntity<>(repositorioProduto.save(produto), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping("/produtos/{id}")
    public ResponseEntity<HttpStatus> deletarProduto(@PathVariable("id") long id) {
        try {
            Produto produto = ProdutoDAO.procurarProduto(id, repositorioProduto);
            if (produto != null) {
                repositorioProduto.deleteById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping("/produtos")
    public ResponseEntity<Produto> publicarProduto(@RequestBody Produto produto) {
        return new ResponseEntity<>(repositorioProduto.save(produto), HttpStatus.OK);
    }
    
    @GetMapping("/produtos/{id}")
    public ResponseEntity<Produto> recuperarProduto(@PathVariable("id") long id) {
        try {
            Produto produto = ProdutoDAO.procurarProduto(id, repositorioProduto);
            if (produto != null) {
                return new ResponseEntity<>(produto, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/produtos")
    public ResponseEntity<List<Produto>> recuperarProdutos() {
        try {
            return new ResponseEntity<>(repositorioProduto.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
