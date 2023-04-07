package br.com.trabalho.droneseta.utils;

public enum EnvironmentPath {
    PATH("");

    private String path;

    EnvironmentPath(String path) {
        this.path = path;
        String currentDir = System.getProperty("user.dir");
        setPath(currentDir+"\\src\\main\\resources\\imagens");
    }

    public String getPath() {
        return path;
    }

    private void setPath(String novoPath) {
        path = novoPath;
    }
}
