import axios from "axios";

export default function LoginService() {

    function validaLogin(email, pass) {
    axios.get("http://localhost:8080/findUser", { email }, { pass })
        .then((response) => {
            localStorage.setItem("email", response.user.email);
            localStorage.setItem("pass", response.user.pass);
            localStorage.setItem("authLogin", true);
        })
        .catch()
}
}