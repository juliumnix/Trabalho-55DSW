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
    const response = await api.delete(`/clientes/${userId}/carrinho/${itemId}`);
    return response;
  }
}
