import { useState, React } from "react";
import {
  Check,
  CheckWrapper,
  Container,
  Content,
  SignUpData,
  SignUpDataContent,
  SignUpDataWrapper,
  SignUpImage,
  Title,
} from "./styles";
import Header from "../../components/Header";
import { ItemButton, Spacer, Logo } from "../../components/Header/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import signUpBackgroundImage from "../../assets/background-login.png";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [pass, setPass] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [useSameAddress, setUseSameAddress] = useState(false);
  const [cardNumber, setCardNumber] = useState("");

  function nameHandler(text) {
    setName(text);
  }

  function emailHandler(text) {
    setEmail(text);
  }

  function cpfHandler(text) {
    setCpf(text);
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
    setCardNumber(text);
  }

  return (
    <Container>
      <Header
        leftChildren={
          <>
            <Logo src={require("../../assets/logo.png")} />
            <Spacer />
            <ItemButton>FEMININO</ItemButton>
            <Spacer />
            <ItemButton>MASCULINO</ItemButton>
          </>
        }
        rightChildren={<></>}
      ></Header>
      <Content>
        <SignUpDataWrapper>
          <SignUpImage src={signUpBackgroundImage}></SignUpImage>
          <SignUpData>
            <SignUpDataContent>
              <Title>Droneseta</Title>
              <div>
                <div>
                  <Input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={name}
                    onChange={(event) => nameHandler(event.target.value)}
                    width={"35vh"}
                    height={"2vh"}
                    margin={"0 0 3vh 0"}
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
                    margin={"0 0 3vh 0"}
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder="CPF"
                    name="cpf"
                    value={cpf}
                    onChange={(event) => cpfHandler(event.target.value)}
                    width={"35vh"}
                    height={"2vh"}
                    margin={"0 0 3vh 0"}
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
                    margin={"0 0 3vh 0"}
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
                    margin={"0 0 3vh 0"}
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
                <div>
                  <CheckWrapper>
                    <Check
                      type="checkbox"
                      checked={useSameAddress}
                      onChange={useSameAddressHandler}
                    />
                    Utilizar endereço de entrega
                  </CheckWrapper>
                </div>
                <div>
                  <Input
                    type="number"
                    placeholder="Número do cartão"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={(event) => cardNumberHandler(event.target.value)}
                    width={"35vh"}
                    height={"2vh"}
                    margin={"0 0 3vh 0"}
                  />
                </div>
              </div>
              <div>
                <Button title={"CADASTRAR"} width={"41vh"} />
              </div>
            </SignUpDataContent>
          </SignUpData>
        </SignUpDataWrapper>
      </Content>
    </Container>
  );
}
