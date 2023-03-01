import { useState, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../../services/LoginService";
import { ContainerLogin, Container, ImageLogin } from "./styles";
import {
  ItemContainer,
  ItemButton,
  Spacer,
  Logo,
} from "../../components/Header/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const loginService = new LoginService();

  useEffect(() => {}, []);

  async function loginHandler() {
    if (email.length <= 0) {
      return;
    }
    const { data } = await loginService.login(email, pass);
    if (data === "Logou") {
      const { data } = await loginService.getuserByEmail(email);
      console.log("data", data);
      // navigate("/home");
    } else {
      alert(data);
    }
  }

  function emailHandler(text) {
    setEmail(text);
  }

  function passwordHandler(text) {
    setPass(text);
  }

  return (
    <div>
      <Container>
        <ItemContainer>
          <Logo src={require("../../assets/logo.png")} />
          <Spacer />
          <ItemButton>FEMININO</ItemButton>
          <Spacer />
          <ItemButton>MASCULINO</ItemButton>
        </ItemContainer>
      </Container>
      <ImageLogin>
        <ContainerLogin>
          <div>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(event) => emailHandler(event.target.value)}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Senha"
              name="pass"
              value={pass}
              onChange={(event) => passwordHandler(event.target.value)}
            />
          </div>
          <div>
            <Button title={"ENTRAR"} onClick={loginHandler} />
          </div>
        </ContainerLogin>
      </ImageLogin>
    </div>
  );
}
