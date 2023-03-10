import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  Container,
  ContainerError,
  StatusMessage,
  Subtitle,
  Title,
} from "./styles.js";
import {
  ClickMenu,
  ItemButton,
  Logo,
  Spacer,
} from "../../components/Header/styles";
import { useUsuario } from "../../hooks/UsuarioHook.js";
import Header from "../../components/Header/index.js";
import { useNavigate } from "react-router-dom";

function ErrorScreen() {
  const navigate = useNavigate();
  const { clearUsuarioFromLocalState } = useUsuario();
  function logout() {
    clearUsuarioFromLocalState();
    navigate("/");
  }
  return (
    <Container>
      <Header
        leftChildren={
          <>
            <Spacer />
            <Logo
              src={require("../../assets/logo.png")}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/home");
              }}
            />
            <Spacer />
            <ItemButton
              onClick={() => {
                navigate("/products");
              }}
            >
              PRODUTOS
            </ItemButton>
          </>
        }
        rightChildren={
          <>
            <ClickMenu
              style={{ padding: 0 }}
              onClick={() => {
                navigate("/shopping-cart");
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: "4vh", cursor: "pointer" }} />
            </ClickMenu>

            <Spacer />
            <ClickMenu style={{ padding: 0 }} onClick={logout}>
              <LogoutIcon sx={{ fontSize: "4vh", cursor: "pointer" }} />
            </ClickMenu>
            <Spacer />
          </>
        }
      />
      <ContainerError>
        <Title>Ops...</Title>
        <Subtitle>
          Parece que a página que você quer acessar não existe...
        </Subtitle>
        <StatusMessage>404</StatusMessage>
      </ContainerError>
    </Container>
  );
}

export default ErrorScreen;
