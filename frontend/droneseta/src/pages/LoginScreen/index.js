import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../../services/LoginService";
import { ContainerLogin, Container, ImageLogin } from "./styles";
import { ItemContainer, ItemButton, Spacer, Logo } from "../../components/Header/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

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
    //TODO validar com a funcao correta depois
    const {response} = loginService.validaLogin(email, pass);
    if (response) {
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
            <Button title={"ENTRAR"} onClick={loginHandler} />
          </div>
        </ContainerLogin>
      </ImageLogin>
    </div>
  );
}

