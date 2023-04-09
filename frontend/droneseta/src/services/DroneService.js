import api from "./AxiosConfig";

export default class DroneService {

  async getDroneHistory() {
    const response = await api.get("historicos-drone");
    return response;
  }

  async getDroneHistoryById(id) {
    const response = await api.get(`historicos-drone/${id}`);
    return response;
  }

}