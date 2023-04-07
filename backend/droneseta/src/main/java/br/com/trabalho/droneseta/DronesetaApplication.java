package br.com.trabalho.droneseta;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import br.com.trabalho.droneseta.storage.StorageProperties;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
@EnableScheduling
public class DronesetaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DronesetaApplication.class, args);
	}
}
