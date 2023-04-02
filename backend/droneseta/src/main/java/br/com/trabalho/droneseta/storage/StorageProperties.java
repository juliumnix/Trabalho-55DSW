package br.com.trabalho.droneseta.storage;

import br.com.trabalho.droneseta.utils.EnvironmentPath;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("storage")
public class StorageProperties {

	String path = EnvironmentPath.PATH.getPath();
	private String location = path;

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

}
