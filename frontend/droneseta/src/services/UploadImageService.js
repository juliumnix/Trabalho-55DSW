import api from "./AxiosConfig";

export default class UploadImageService {
  async uploadImage(file) {
    const headers = { "Content-Type": "multipart/form-data" };
    return await api.post(`/uploadImagem`, file, {headers: headers});
  }
}
