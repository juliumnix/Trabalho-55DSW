package br.com.trabalho.droneseta.storage;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("storage")
public class StorageProperties {

	private String location = "D:\\trabalhos\\Setimo Semestre\\desenvolvimento-web\\Trabalho-55DSW\\backend\\droneseta\\src\\main\\resources\\imagens";

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}
