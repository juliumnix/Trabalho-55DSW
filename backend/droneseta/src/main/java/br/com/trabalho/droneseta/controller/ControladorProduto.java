package br.com.trabalho.droneseta.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.trabalho.droneseta.DAO.ProdutoDAO;
import br.com.trabalho.droneseta.model.bean.Estoque;
import br.com.trabalho.droneseta.model.bean.Produto;
import br.com.trabalho.droneseta.repository.RepositorioProduto;
import jakarta.validation.Valid;

@CrossOrigin(origins = "*")
@RestController
public class ControladorProduto {
    
    @Autowired
    RepositorioProduto repositorioProduto;
    

	@PutMapping("/produtos/{id}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable("id") long id, @Valid @RequestBody Produto produtoAtualizado) {
        Produto produto = ProdutoDAO.procurarProduto(id, repositorioProduto);
        if (produto != null) {
            produto.setDescricao(produtoAtualizado.getDescricao());
            produto.setUrlImagem(produtoAtualizado.getUrlImagem());
            produto.setPreco(produtoAtualizado.getPreco());
            produto.setTamanhos(produtoAtualizado.getTamanhos());
            produto.getEstoques().clear();
            produto.getEstoques().addAll(produtoAtualizado.getEstoques());
            return new ResponseEntity<>(repositorioProduto.save(produto), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @PutMapping("/produtos/{idProduto}/estoque/{idTamanho}/aumentar")
    public ResponseEntity<Produto> aumentarEstoqueProduto(@PathVariable("idProduto") long idProduto, @PathVariable("idTamanho") long idTamanho, @Valid @RequestBody int quantidadeAumentar) {
        Produto produto = ProdutoDAO.procurarProduto(idProduto, repositorioProduto);
        if (produto != null) {
            Optional<Estoque> estoque = produto.getEstoques().stream().filter(v -> v.getTamanho().getId() == idTamanho).findFirst();
            if (estoque.isPresent()) {
                Estoque e = estoque.get();
                e.setQuantidade(e.getQuantidade() + quantidadeAumentar);
            }
            return new ResponseEntity<>(repositorioProduto.save(produto), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @PutMapping("/produtos/{idProduto}/estoque/{idTamanho}/diminuir")
    public ResponseEntity<Produto> diminuirEstoqueProduto(@PathVariable("idProduto") long idProduto, @PathVariable("idTamanho") long idTamanho, @Valid @RequestBody int quantidadeDiminuir) {
        Produto produto = ProdutoDAO.procurarProduto(idProduto, repositorioProduto);
        if (produto != null) {
            Optional<Estoque> estoque = produto.getEstoques().stream().filter(v -> v.getTamanho().getId() == idTamanho).findFirst();
            if (estoque.isPresent()) {
                Estoque e = estoque.get();
                e.setQuantidade(e.getQuantidade() - quantidadeDiminuir);
            }
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
    public ResponseEntity<Produto> publicarProduto(@Valid @RequestBody Produto produto) {
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
