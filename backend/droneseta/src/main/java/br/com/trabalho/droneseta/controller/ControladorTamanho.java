package br.com.trabalho.droneseta.controller;

import br.com.trabalho.droneseta.DAO.TamanhoDAO;
import br.com.trabalho.droneseta.model.bean.Tamanho;
import br.com.trabalho.droneseta.repository.RepositorioTamanho;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ControladorTamanho {
    
    @Autowired
    RepositorioTamanho repositorioTamanho;
    
    @PutMapping("/tamanhos/{id}")
    public ResponseEntity<Tamanho> atualizarTamanho(@PathVariable("id") long id, @Valid @RequestBody Tamanho tamanhoAtualizado) {
        Tamanho tamanho = TamanhoDAO.procurarTamanho(id, repositorioTamanho);
        if (tamanho != null) {
            tamanho.setSigla(tamanhoAtualizado.getSigla());
            return new ResponseEntity<>(repositorioTamanho.save(tamanho), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping("/tamanhos/{id}")
    public ResponseEntity<HttpStatus> deletarTamanho(@PathVariable("id") long id) {
        try {
            Tamanho tamanho = TamanhoDAO.procurarTamanho(id, repositorioTamanho);
            if (tamanho != null) {
                repositorioTamanho.deleteById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping("/tamanhos")
    public ResponseEntity<Tamanho> publicarTamanho(@Valid @RequestBody Tamanho tamanho) {
        return new ResponseEntity<>(repositorioTamanho.save(tamanho), HttpStatus.OK);
    }
    
    @GetMapping("/tamanhos/{id}")
    public ResponseEntity<Tamanho> recuperarTamanho(@PathVariable("id") long id) {
        try {
            Tamanho tamanho = TamanhoDAO.procurarTamanho(id, repositorioTamanho);
            if (tamanho != null) {
                return new ResponseEntity<>(tamanho, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/tamanhos")
    public ResponseEntity<List<Tamanho>> recuperarTamanhos() {
        try {
            return new ResponseEntity<>(repositorioTamanho.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
