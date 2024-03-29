package br.com.trabalho.droneseta.controller;

import br.com.trabalho.droneseta.DAO.AdministradorDAO;
import br.com.trabalho.droneseta.model.bean.Administrador;
import br.com.trabalho.droneseta.repository.RepositorioAdministrador;
import jakarta.validation.Valid;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ControladorAdministrador {
    
    @Autowired
    RepositorioAdministrador repositorioAdministrador;
    
    @PutMapping("/administradores/{id}")
    public ResponseEntity<Administrador> atualizarAdministrador(@PathVariable("id") long id, @Valid @RequestBody Administrador administradorAtualizado) {
        Administrador administrador = AdministradorDAO.procurarAdministrador(id, repositorioAdministrador);
        if (administrador != null) {
            administrador.setNome(administradorAtualizado.getNome());
            administrador.setEmail(administradorAtualizado.getEmail());
            administrador.setSenha(administradorAtualizado.getSenha());
            return new ResponseEntity<>(repositorioAdministrador.save(administrador), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/administradores/login/{email}/{senha}")
    public String loginAdministrador(@PathVariable String email, @PathVariable String senha){
        String haveAccount  = AdministradorDAO.temLoginAdministrador(email, senha, repositorioAdministrador);
        return haveAccount;
    }

    @GetMapping("/administradores/email/{email}")
    public Administrador recuperaAdministradorPeloEmail(@PathVariable String email){
        return repositorioAdministrador.findByEmail(email).get();
    }
    
    @DeleteMapping("/administradores/{id}")
    public ResponseEntity<HttpStatus> deletarAdministrador(@PathVariable("id") long id) {
        try {
            Administrador administrador = AdministradorDAO.procurarAdministrador(id, repositorioAdministrador);
            if (administrador != null) {
                repositorioAdministrador.deleteById(id);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping("/administradores")
    public ResponseEntity<Administrador> publicarAdministrador(@Valid @RequestBody Administrador administrador) {
        final String salt = BCrypt.gensalt();
        administrador.setSalt(salt);
        administrador.setSenha(BCrypt.hashpw(administrador.getSenha(), salt));
        return new ResponseEntity<>(repositorioAdministrador.save(administrador), HttpStatus.OK);
    }
    
    @GetMapping("/administradores/{id}")
    public ResponseEntity<Administrador> recuperarAdministrador(@PathVariable("id") long id) {
        try {
            Administrador administrador = AdministradorDAO.procurarAdministrador(id, repositorioAdministrador);
            if (administrador != null) {
                return new ResponseEntity<>(administrador, HttpStatus.OK);
            }
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/administradores")
    public ResponseEntity<List<Administrador>> recuperarAdministradores() {
        try {
            return new ResponseEntity<>(repositorioAdministrador.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
