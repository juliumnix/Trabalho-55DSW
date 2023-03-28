import api from "./AxiosConfig";

export default class UserService {
  async getShoppingCart(userId) {
    const response = await api.get(`/clientes/${userId}/carrinho`);
    return response;
  }

  async increaseItemCount(userId, itemId) {
    const response = await api.put(
      `/clientes/${userId}/carrinho/${itemId}/aumentar`
    );
    return response;
  }

  async decreaseItemCount(userId, itemId) {
    const response = await api.put(
      `/clientes/${userId}/carrinho/${itemId}/diminuir`
    );
    return response;
  }

  async removeItem(userId, itemId) {
    const response = await api.put(
      `/clientes/${userId}/carrinho/limpar/${itemId}`
    );
    return response;
  }

  async removeAllItems(userId) {
    const response = await api.put(`/clientes/${userId}/carrinho/limpar`);
    return response;
  }

  async finalizarCompra(id, produtos, valor, pagAprovado, entregue) {
    const json = {
      produtos,
      valor,
      pagAprovado,
      entregue,
    };
    const response = await api.post(`/clientes/${id}/compras`, json);
    return response;
  }

  async addCarrinho(idCliente, produto, tamanho, quantidade) {
    const json = {
      produto,
      tamanho,
      quantidade,
    };
    const response = await api.post(`clientes/${idCliente}/carrinho`, json);
    return response;
  }
}
