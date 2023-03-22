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

  async getDelivery() {
    const response = await api.get("vendas");
    return response;
  }

  async getClients() {
    const response = await api.get("clientes");
    return response;
  }

  async deleteClient(id) {
    const response = await api.delete(`clientes/${id}`);
    return response;
  }

  async getAdministrators() {
    const response = await api.get("administradores");
    return response;
  }

  async deleteAdministrator(id) {
    const response = await api.delete(`administradores/${id}`);
    return response;
  }
}
