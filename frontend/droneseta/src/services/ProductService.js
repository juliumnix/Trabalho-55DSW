import api from "./AxiosConfig";

export default class ProductService {
  async cadastraProduto(jsonProduto) {
    console.log(JSON.stringify(jsonProduto));
    return await api.post("produtos", jsonProduto);
  }

  async resgataTamanhos() {
    const response = await api.get("tamanhos");
    return response;
  }
}
