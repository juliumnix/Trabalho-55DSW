import api from "./AxiosConfig";

export default class AdminService {
  async loginAdmin(email, senha) {
    const response = await api.get(`/administradores/login/${email}/${senha}`);
    return response;
  }

  async getAdminByEmail(email) {
    const response = await api.get(`/administradores/email/${email}`);
    return response;
  }
}
