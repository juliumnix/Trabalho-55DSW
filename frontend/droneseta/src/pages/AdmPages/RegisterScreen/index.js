import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../../components/Header';
import { Container, Logo, ItemButton, Spacer } from "./styles";
import ImageButton from "../../../components/ImageButton";

export default function RegisterScreen() {
  return (
    <>
     <Header leftChildren={
      <>
        <Logo src={require("../../../assets/logo.png")} />
          <Spacer />
        <ItemButton>CADASTRO PRODUTOS</ItemButton>
      </>
      }
      rightChildren={
      <>
        <Spacer />
          <ImageButton image={require("../../../assets/logout.png")} width={"30vw"} height={"30vh"}/>
        <Spacer />
      </>
      }
      />
      <Container />
    </>
    
  );
}