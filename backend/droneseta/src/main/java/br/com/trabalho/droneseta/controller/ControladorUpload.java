package br.com.trabalho.droneseta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import br.com.trabalho.droneseta.storage.StorageService;
import org.springframework.core.io.Resource;

import java.io.IOException;
import java.nio.file.Path;

@CrossOrigin(origins = "*")
@RestController
public class ControladorUpload {
	
	private final StorageService storageService; 
	
	@Autowired
	public ControladorUpload(StorageService storageService) {
		this.storageService = storageService;
	}
	
	@GetMapping("/uploadImagem/{filename:.+}")
	@ResponseBody
	public ResponseEntity<Resource> serveFile(@PathVariable String filename) throws IOException {
		Resource resource = new ClassPathResource("imagens/" + filename);
		System.out.println(resource);
		return ResponseEntity.ok()
				.contentType(MediaType.IMAGE_JPEG)
				.body(new InputStreamResource(resource.getInputStream()));

//
//		Resource file = storageService.loadAsResource(filename);
//		Path path = storageService.load(filename);
//		System.out.println(path);
//		return ResponseEntity.ok().header(HttpHeaders.CONTENT_DISPOSITION,
//				"attachment; filename=\"" + file.getFilename() + "\"").body(file);
	}
	
	@PostMapping("/uploadImagem")
	public String handleFileUpload(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes) {
		System.out.println("file uploaded" + file);
		storageService.store(file);
		redirectAttributes.addFlashAttribute("message",
				"You successfully uploaded " + file.getOriginalFilename() + "!");
		return file.getOriginalFilename();
	}

}
