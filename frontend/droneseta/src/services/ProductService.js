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

  async resgataProdutos() {
    const response = await api.get("produtos");
    return response;
  }

  async resgataProduto(id) {
    const response = await api.get(`produtos/${id}`);
    return response;
  }

  async resgataProdutosMaisVendidos() {
    const response = await api.get("produtos/mais-vendidos");
    return response;
  }
}
