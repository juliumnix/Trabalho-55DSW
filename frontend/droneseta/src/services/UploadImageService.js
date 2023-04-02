import api from "./AxiosConfig";

export default class UploadImageService {
  async uploadImage(file) {
    const headers = { "Content-Type": "multipart/form-data" };
    return await api.post(`/uploadImagem`, file, { headers: headers });
  }

  async getImage(file) {
    const response = await api.get(`/uploadImagem/${file}`);
    return response;
  }

  async servicoDeRecuperarImagem(imagem) {
    try {
      const response = await this.getImage(imagem);
      if (response.status === 200) {
        return `http://localhost:8080/uploadImagem/${imagem}`;
      }
    } catch (error) {
      return "https://64.media.tumblr.com/656cc93ba92e5bdb2c394de17b41e78c/tumblr_n5f1798Td41s2t3cto1_500.gifv";
    }
  }
}
