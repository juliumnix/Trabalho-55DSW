import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import LoginService from "../../services/LoginService";
import { ContainerLogin, Container, ImageLogin, Label, Input, Button } from "./styles";
import { ItemContainer, ItemButton, Spacer, Logo } from "../../components/Header/styles";

export default function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  const loginService = new LoginService();

  function emailHandler(event) {
    setEmail(event.target.value);
  }

  function passwordHandler(event) {
    setPass(event.target.value);
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
      <ImageLogin style={{
        background: `url(${require("../../assets/login_background.png")})`,
        backgroundRepeat: `no-repeat`, backgroundPosition: `right`
      }}>
        <ContainerLogin>
          <div>
            <Input type="text" placeholder="email" name="email" value={email} onChange={emailHandler}/>
          </div>
          <div>
            <Input type="password" placeholder="senha" name="pass" value={pass} onChange={passwordHandler} />
          </div>
          <div>
            <Button type="button" name="login" onClick={loginHandler}>ENTRAR</Button>
          </div>
        </ContainerLogin>
      </ImageLogin>
    </div>
  );
}

