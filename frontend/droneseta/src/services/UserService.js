import api from "./AxiosConfig";

export default class UserService {
  async getShoppingCart(userId) {
    console.log(userId);
    const response = await api.get(`/clientes/${userId}/carrinho`);
    return response;
  }
}
