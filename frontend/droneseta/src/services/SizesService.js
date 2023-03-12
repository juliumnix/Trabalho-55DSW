import api from "./AxiosConfig";

export default class SizesService {
  async getSizes() {
    const response = await api.get("tamanhos");
    return response;
  }

  async setSize(size) {
    return await api.post("tamanhos", { sigla: size });
  }
}
