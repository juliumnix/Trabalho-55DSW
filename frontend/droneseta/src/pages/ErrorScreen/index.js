import React from "react";

import {
  Container,
  ContainerError,
  StatusMessage,
  Subtitle,
  Title,
} from "./styles.js";
import { useUsuario } from "../../hooks/UsuarioHook.js";
import { useNavigate } from "react-router-dom";

function ErrorScreen() {
  const navigate = useNavigate();

  return (
    <Container>
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
