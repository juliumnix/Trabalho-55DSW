package br.com.trabalho.droneseta.utils;

public enum EnvironmentPath {
    PATH("D:\\workspace\\projeto-55DSWF\\Trabalho-55DSW\\backend\\droneseta\\src\\main\\resources\\imagens");

    private String path;

    EnvironmentPath(String path) {
        this.path = path;
    }

    public String getPath() {
        return path;
    }
}
