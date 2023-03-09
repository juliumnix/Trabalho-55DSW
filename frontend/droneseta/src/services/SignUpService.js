import api from "./AxiosConfig";

export default class SignUpService {
  async signUp(
    name,
    email,
    cpf,
    password,
    deliveryAddress,
    billingAddress,
    cardNumber
  ) {
    const response = await api.post("/clientes", {
      nome: name,
      email: email,
      senha: password,
      cpf: cpf,
      numCartao: cardNumber,
      endCobranca: billingAddress,
      endEntrega: deliveryAddress,
    });
    return response;
  }
}
