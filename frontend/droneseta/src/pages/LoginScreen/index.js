import { useState, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../../services/LoginService";
import {
  Container,
  Content,
  LoginImage,
  LoginData,
  LoginDataContent,
  LoginDataWrapper,
  Title,
  LoginDataContentWrapper,
  LogoWrapper,
  LogoSVG,
  DronesetaTitle,
  ButtonsWrapper,
  SignUpRedirect,
} from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useUsuario } from "../../hooks/UsuarioHook";
import loginBackgroundImage from "../../assets/background-login.png";
import Vector from "../../assets/Vector.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const { handleUsuario, getUsuarioFromLocalState } = useUsuario();
  const loginService = new LoginService();

  useEffect(() => {
    document.title = "Droneseta";
    if (getUsuarioFromLocalState()) {
      navigate("/home");
    }
  }, []);

  async function loginHandler() {
    if (email.length <= 0) {
      return;
    }
    const { data } = await loginService.login(email, pass);
    if (data === "Logou") {
      const { data } = await loginService.getuserByEmail(email);
      handleUsuario(data);
      localStorage.setItem("authLogin", JSON.stringify(data));
      navigate("/home");
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
    <Container>
      <Content>
        <LogoWrapper>
          <LogoSVG src={Vector} />
          <DronesetaTitle>DRONESETA</DronesetaTitle>
        </LogoWrapper>
        <LoginDataWrapper>
          <LoginImage src={loginBackgroundImage}></LoginImage>
          <LoginData>
            <LoginDataContentWrapper>
              <LoginDataContent>
                <Title>Droneseta</Title>
                <div>
                  <Input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(event) => emailHandler(event.target.value)}
                    width={"35vh"}
                    height={"2vh"}
                    margin={"0 0 2.5vh 0"}
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Senha"
                    name="pass"
                    value={pass}
                    onChange={(event) => passwordHandler(event.target.value)}
                    width={"35vh"}
                    height={"2vh"}
                    margin={"0 0 2.5vh 0"}
                  />
                </div>
              </LoginDataContent>
              <ButtonsWrapper>
                <Button title={"ENTRAR"} onClick={loginHandler} />
                <SignUpRedirect href="/sign-up">
                  Não possui uma conta? Cadastre-se
                </SignUpRedirect>
              </ButtonsWrapper>
            </LoginDataContentWrapper>
          </LoginData>
        </LoginDataWrapper>
      </Content>
    </Container>
  );
}
