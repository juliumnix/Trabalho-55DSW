package br.com.trabalho.droneseta.controller;

import br.com.trabalho.droneseta.DAO.VendaDAO;
import br.com.trabalho.droneseta.model.bean.Venda;
import br.com.trabalho.droneseta.repository.RepositorioCliente;
import br.com.trabalho.droneseta.repository.RepositorioVenda;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ControladorVenda {
    
    @Autowired
    RepositorioVenda repositorioVenda;
    
    @Autowired
    RepositorioCliente repositorioCliente;
    
    @PutMapping("/vendas/{id}")
    public ResponseEntity<Venda> atualizarVenda(@PathVariable("id") long id, @Valid @RequestBody Venda vendaAtualizada) {
        Venda venda = VendaDAO.procurarVenda(id, repositorioVenda);
        if (venda != null) {
            venda.setCliente(vendaAtualizada.getCliente());
            venda.setProdutos(vendaAtualizada.getProdutos());
            venda.setValor(vendaAtualizada.getValor());
            venda.setPagAprovado(vendaAtualizada.isPagAprovado());
            venda.setEntregue(vendaAtualizada.isEntregue());
            return new ResponseEntity<>(repositorioVenda.save(venda), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping("/vendas/{id}")
    public ResponseEntity<HttpStatus> deletarVenda(@PathVariable("id") long id) {
        try {
            Venda venda = VendaDAO.procurarVenda(id, repositorioVenda);
            if (venda != null) {
                repositorioVenda.deleteById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping("/vendas")
    public ResponseEntity<Venda> publicarVenda(@Valid @RequestBody Venda venda) {
        return new ResponseEntity<>(repositorioVenda.save(venda), HttpStatus.OK);
    }
    
    @GetMapping("/vendas/{id}")
    public ResponseEntity<Venda> recuperarVenda(@PathVariable("id") long id) {
        try {
            Venda venda = VendaDAO.procurarVenda(id, repositorioVenda);
            if (venda != null) {
                return new ResponseEntity<>(venda, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/vendas")
    public ResponseEntity<List<Venda>> recuperarVendas() {
        try {
            return new ResponseEntity<>(repositorioVenda.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
