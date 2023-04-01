package br.com.trabalho.droneseta.storage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class ControladorFileUpload {

	private final StorageService storageService;

	@Autowired
	public ControladorFileUpload(StorageService storageService) {
		this.storageService = storageService;
	}


	@GetMapping("/testeimagem")
	public void testeImagem() {
		System.out.println("Chegou aqui");
	}
	@ExceptionHandler(StorageFileNotFoundException.class)
	public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
		return ResponseEntity.notFound().build();
	}
}
