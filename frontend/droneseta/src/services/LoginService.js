import api from "./AxiosConfig";

export default class LoginService {
  async validaLogin(email, pass) {
    return await api.get("findUser", { email, pass });
  }

  async getuserByEmail(email) {
    const response = await api.get(`clientes/email/${email}`);
    return response;
  }

  async login(email, senha) {
    const response = await api.get(`clientes/email/${email}/${senha}`);
    return response;
  }
}
