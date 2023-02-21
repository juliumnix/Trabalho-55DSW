import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../../services/LoginService";
import { ContainerLogin, Container, ImageLogin, Label, Button } from "./styles";
import { ItemContainer, ItemButton, Spacer, Logo } from "../../components/Header/styles";
import Input from "../../components/Input";

export default function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const loginService = new LoginService();

  function emailHandler(text) {
    setEmail(text);
  }

  function passwordHandler(text) {
    setPass(text);
  }

  function loginHandler() {
    const respose = loginService.validaLogin(email, pass);
    if (respose) {
      navigate('/home');
    }
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
            <Input type="text" placeholder="Email" name="email" value={email} onChange={(event) => emailHandler(event.target.value)}/>
          </div>
          <div>
            <Input type="password" placeholder="Senha" name="pass" value={pass} onChange={(event) => passwordHandler(event.target.value)} />
          </div>
          <div>
            <Button type="button" name="login" onClick={loginHandler}>ENTRAR</Button>
          </div>
        </ContainerLogin>
      </ImageLogin>
    </div>
  );
}

