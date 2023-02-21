import api from "./AxiosConfig";

export default class LoginService {
    async validaLogin(email, pass) {
        return await api.get("findUser", {email, pass});
    }
}
