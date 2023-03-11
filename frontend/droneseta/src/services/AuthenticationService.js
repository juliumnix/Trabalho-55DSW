import api from "./AxiosConfig";

export default class AuthenticationService {
    async validaLogin(user, pass) {
        return await api.get("findByUser", {user, pass});
    }
}
