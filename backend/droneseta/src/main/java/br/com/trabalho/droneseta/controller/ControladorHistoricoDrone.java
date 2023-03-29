package br.com.trabalho.droneseta.controller;

import br.com.trabalho.droneseta.DAO.HistoricoDroneDAO;
import br.com.trabalho.droneseta.DAO.TamanhoDAO;
import br.com.trabalho.droneseta.model.bean.HistoricoDrone;
import br.com.trabalho.droneseta.model.bean.Tamanho;
import br.com.trabalho.droneseta.repository.RepositorioHistoricoDrone;
import br.com.trabalho.droneseta.repository.RepositorioTamanho;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ControladorHistoricoDrone {
    
    @Autowired
    RepositorioHistoricoDrone repositorioHistoricoDrone;
    
    @PostMapping("/historicos-drone")
    public ResponseEntity<HistoricoDrone> publicarHistoricoDrone(@Valid @RequestBody HistoricoDrone historicoDrone) {
        return new ResponseEntity<>(repositorioHistoricoDrone.save(historicoDrone), HttpStatus.OK);
    }
    
    @GetMapping("/historicos-drone/{id}")
    public ResponseEntity<HistoricoDrone> recuperarHistoricoDrone(@PathVariable("id") long id) {
        try {
            HistoricoDrone historicoDrone = HistoricoDroneDAO.procurarHistoricoDrone(id, repositorioHistoricoDrone);
            if (historicoDrone != null) {
                return new ResponseEntity<>(historicoDrone, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/historicos-drone")
    public ResponseEntity<List<HistoricoDrone>> recuperarHistoricosDrone() {
        try {
            return new ResponseEntity<>(repositorioHistoricoDrone.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
