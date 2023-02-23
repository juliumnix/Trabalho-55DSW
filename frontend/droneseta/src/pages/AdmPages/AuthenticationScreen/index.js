import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import AuthenticationService from "../../../services/AuthenticationService";
import { Container, ContainerLogin, Button, ImageLogin } from "./styles";

export default function AuthenticationScreen() {

  const [user, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const authService = new AuthenticationService();

  function userHandler(text) {
    setEmail(text);
  }

  function passwordHandler(text) {
    setPass(text);
  }

  function loginHandler() {
    //TODO validar com a funcao correta depois
    const {response} = authService.validaLogin(user, pass);
    if (response) {
        localStorage.setItem('authLoginAdmin', true);
        navigate('/home/admin');
    }
  }

  return (
    <Container>
      <ImageLogin>
        <ContainerLogin>
          <div>
            <Input type="text" placeholder="Usuario" name="user" value={user} onChange={(event) => userHandler(event.target.value)}/>
          </div>
          <div>
            <Input type="password" placeholder="Senha" name="pass" value={pass} onChange={(event) => passwordHandler(event.target.value)} />
          </div>
          <div>
            <Button type="button" name="login" onClick={loginHandler}>ENTRAR</Button>
          </div>
        </ContainerLogin>
      </ImageLogin>
    </Container>
  );
}