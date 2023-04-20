import { useState, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import AdminService from "../../../services/AdminService";
import {
  ButtonsWrapper,
  Container,
  ContainerLogin,
  Content,
  DronesetaTitle,
  ImageLogin,
  LoginData,
  LoginDataContent,
  LoginDataContentWrapper,
  LoginDataWrapper,
  LoginImage,
  LoginRedirect,
  LogoSVG,
  LogoWrapper,
  SignUpRedirect,
  Title,
} from "./styles";
import Vector from "../../../assets/Vector.svg";
import loginBackgroundImage from "../../../assets/background-login.png";

export default function SignUpAdministratorScreen() {
  const [user, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const adminService = new AdminService();

  useEffect(() => {
    getAdministradorInLocalStorage();
  }, []);

  function getAdministradorInLocalStorage() {
    const admin = localStorage.getItem("authLoginAdmin");
    if (admin === "true") {
      navigate("/home-admin");
    }
  }

  function userHandler(text) {
    setEmail(text);
  }

  function passwordHandler(text) {
    setPass(text);
  }

  function nameHandler(text) {
    setName(text);
  }

  async function loginHandler() {
    const { data } = await adminService.createAdministrator(name, user, pass);
    if (data.email === user) {
      localStorage.setItem("authLoginAdmin", true);
      navigate("/home-admin");
    }
  }

  return (
    <Container>
      <Content>
        <LogoWrapper>
          <LogoSVG src={Vector} />
          <DronesetaTitle>Painel do</DronesetaTitle>
          <DronesetaTitle>Administrador</DronesetaTitle>
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
                    value={user}
                    onChange={(event) => userHandler(event.target.value)}
                    width={"35vh"}
                    height={"2vh"}
                    margin={"0 0 2.5vh 0"}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={name}
                    onChange={(event) => nameHandler(event.target.value)}
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
                <Button
                  title={"CRIAR CONTA"}
                  height={"6vh"}
                  width={"41vh"}
                  padding={0}
                  onClick={loginHandler}
                />
                <LoginRedirect href="/admin">
                  Já possui uma conta? Entre
                </LoginRedirect>
              </ButtonsWrapper>
            </LoginDataContentWrapper>
          </LoginData>
        </LoginDataWrapper>
      </Content>
    </Container>
  );
}
