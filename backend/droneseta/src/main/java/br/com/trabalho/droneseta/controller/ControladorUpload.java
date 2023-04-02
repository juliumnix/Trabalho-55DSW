package br.com.trabalho.droneseta.controller;

import br.com.trabalho.droneseta.utils.EnvironmentPath;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
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
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@CrossOrigin(origins = "*")
@RestController
public class ControladorUpload {
	
	private final StorageService storageService; 
	
	@Autowired
	public ControladorUpload(StorageService storageService) {
		this.storageService = storageService;
	}

//	@GetMapping("/uploadImagem/{filename:.+}")
//	@ResponseBody
//	public ResponseEntity<Resource> serveFile(@PathVariable String filename, HttpServletResponse response) throws IOException {
//
//		// Verifica se o arquivo solicitado existe no diretório de imagens
//		Path filePath = Paths.get("D:\\workspace\\projeto-55DSWF\\Trabalho-55DSW\\backend\\droneseta\\src\\main\\resources\\imagens", filename);
//		if (!Files.exists(filePath) || Files.isDirectory(filePath)) {
//			return ResponseEntity.notFound().build();
//		}
//
//		// Carrega o recurso de imagem do diretório 'imagens' do classpath
//		Resource resource = new ClassPathResource(filePath.toString());
//
//		// Configura o cabeçalho de cache do HTTP
//		response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
//
//		// Retorna a imagem como um InputStreamResource
//		return ResponseEntity.ok()
//				.contentType(MediaType.IMAGE_JPEG)
//				.body(new InputStreamResource(resource.getInputStream()));
//	}

	@GetMapping("/uploadImagem/{filename:.+}")
	@ResponseBody
	public ResponseEntity<Resource> serveFile(@PathVariable String filename, HttpServletResponse response) throws IOException {
		String path = EnvironmentPath.PATH.getPath();
		// Verifica se o arquivo solicitado existe no diretório de imagens
		Path filePath = Paths.get(path, filename);
		if (!Files.exists(filePath) || Files.isDirectory(filePath)) {
			return ResponseEntity.notFound().build();
		}

		// Carrega o recurso de imagem diretamente do sistema de arquivos
		Resource resource = new FileSystemResource(filePath.toFile());

		// Configura o cabeçalho de cache do HTTP
		response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

		// Retorna a imagem como um InputStreamResource
		return ResponseEntity.ok()
				.contentType(MediaType.IMAGE_JPEG)
				.body(new InputStreamResource(resource.getInputStream()));
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
