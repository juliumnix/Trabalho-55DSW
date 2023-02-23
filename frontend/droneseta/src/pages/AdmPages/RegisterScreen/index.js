import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { Container, ItemButton, ItemContainer, Logo, Spacer } from "../../../components/Header/styles";
import ImageButton from "../../../components/ImageButton";
export default function RegisterScreen() {

  return (
    <Container>
        <ItemContainer>
          <Logo src={require("../../../assets/logo.png")} />
          <Spacer />
          <ItemButton>CADASTRO PRODUTOS</ItemButton>
        </ItemContainer>
        <ItemContainer>
          <Spacer />
          <ImageButton image={require("../../../assets/logout.png")} width={"30vw"} height={"30vh"}/>
          <Spacer />
        </ItemContainer>
    </Container>
  );
}