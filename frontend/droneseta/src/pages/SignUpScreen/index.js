import { useState, React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../hooks/UsuarioHook";
import {
  ButtonsWrapper,
  Check,
  CheckWrapper,
  Container,
  Content,
  DronesetaTitle,
  LoginRedirect,
  LogoSVG,
  LogoWrapper,
  SignUpData,
  SignUpDataContent,
  SignUpDataContentWrapper,
  SignUpDataWrapper,
  SignUpImage,
  Title,
} from "./styles";
import Header from "../../components/Header";
import { ItemButton, Spacer, Logo } from "../../components/Header/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import signUpBackgroundImage from "../../assets/background-login.png";
import SignUpService from "../../services/SignUpService";

import Vector from "../../assets/Vector.svg";

export default function SignUp() {
  const navigate = useNavigate();
  const { handleUsuario, getUsuarioFromLocalState } = useUsuario();
  const signUpService = new SignUpService();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [pass, setPass] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [useSameAddress, setUseSameAddress] = useState(false);
  const [cardNumber, setCardNumber] = useState("");

  useEffect(() => {
    document.title = "Droneseta";
    if (getUsuarioFromLocalState()) {
      navigate("/home");
    }
  }, []);

  async function signUpHandler() {
    if (
      name === "" ||
      email === "" ||
      cpf === "" ||
      pass === "" ||
      deliveryAddress === "" ||
      (billingAddress === "" && !useSameAddress) ||
      cardNumber === ""
    ) {
      return;
    }

    if (cpf.length < 11 || pass.length < 8 || cardNumber < 16) {
      return;
    }

    if (useSameAddress) {
      setBillingAddress(deliveryAddress);
    }

    const response = await signUpService.signUp(
      name,
      email,
      cpf,
      pass,
      deliveryAddress,
      billingAddress,
      cardNumber
    );
    if (response.status === 200) {
      handleUsuario(response.data);
      localStorage.setItem("authLogin", JSON.stringify(response.data));
      navigate("/home");
    }
  }

  function nameHandler(text) {
    setName(text);
  }

  function emailHandler(text) {
    setEmail(text);
  }

  function cpfHandler(text) {
    let regex = /^[0-9]{0,11}$/;
    let contains = regex.test(text);
    if (contains) {
      setCpf(text);
    }
  }

  function passwordHandler(text) {
    setPass(text);
  }

  function deliveryAddressHandler(text) {
    setDeliveryAddress(text);
  }

  function billingAddressHandler(text) {
    setBillingAddress(text);
  }

  function useSameAddressHandler() {
    setUseSameAddress(!useSameAddress);
  }

  function cardNumberHandler(text) {
    let regex = /^[0-9]{0,16}$/;
    let contains = regex.test(text);
    if (contains) {
      setCardNumber(text);
    }
  }

  return (
    <Container>
      <Header
        leftChildren={
          <>
            <Logo src={require("../../assets/logo.png")} />
            <Spacer />
            <ItemButton>PRODUTOS</ItemButton>
          </>
        }
        rightChildren={<></>}
      ></Header>
      <Content>
        <LogoWrapper>
          <LogoSVG src={Vector} />
          <DronesetaTitle>DRONESETA</DronesetaTitle>
        </LogoWrapper>

        <SignUpDataWrapper>
          <SignUpImage src={signUpBackgroundImage}></SignUpImage>
          <SignUpData>
            <SignUpDataContentWrapper>
              <SignUpDataContent>
                <Title>Droneseta</Title>
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
                    type="text"
                    placeholder="CPF"
                    name="cpf"
                    value={cpf}
                    onChange={(event) => cpfHandler(event.target.value)}
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
                <div>
                  <Input
                    type="text"
                    placeholder="Endereço de entrega"
                    name="deliveryAddress"
                    value={deliveryAddress}
                    onChange={(event) =>
                      deliveryAddressHandler(event.target.value)
                    }
                    width={"35vh"}
                    height={"2vh"}
                    margin={"0 0 2.5vh 0"}
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Endereço de cobrança"
                    name="billingAddress"
                    value={billingAddress}
                    onChange={(event) =>
                      billingAddressHandler(event.target.value)
                    }
                    width={"35vh"}
                    height={"2vh"}
                    margin={"0 0 1.5vh 0"}
                    disabled={useSameAddress}
                  />
                </div>
                <CheckWrapper>
                  <Check
                    type="checkbox"
                    checked={useSameAddress}
                    onChange={useSameAddressHandler}
                  />
                  Utilizar endereço de entrega
                </CheckWrapper>
                <div>
                  <Input
                    type="text"
                    placeholder="Número do cartão"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={(event) => cardNumberHandler(event.target.value)}
                    width={"35vh"}
                    height={"2vh"}
                    margin={"0 0 2.5vh 0"}
                  />
                </div>
              </SignUpDataContent>
              <ButtonsWrapper>
                <Button
                  title={"CADASTRAR"}
                  height={"6vh"}
                  width={"41vh"}
                  padding={0}
                  onClick={signUpHandler}
                />
                <LoginRedirect href="/">
                  Já possui uma conta? Entre
                </LoginRedirect>
              </ButtonsWrapper>
            </SignUpDataContentWrapper>
          </SignUpData>
        </SignUpDataWrapper>
      </Content>
    </Container>
  );
}
