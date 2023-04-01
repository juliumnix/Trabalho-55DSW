import React, { useEffect, useState } from "react";
import Loading from "../Loading";

import {
  Container,
  ContainerImagem,
  ContainerInfos,
  Price,
  Title,
} from "./styles";
import api from "../../services/AxiosConfig";

function MenStoreItem({ imagem, titulo, preco, isLoading, ...rest }) {
  return (
    <>
      <Container {...rest}>
        {isLoading ? (
          <Loading isBlack />
        ) : (
          <>
            <ContainerImagem src={`http://localhost:8080/uploadImagem/${imagem}`} />
            <ContainerInfos>
              <Title>{titulo}</Title>
              <Price>R$ {preco}</Price>
            </ContainerInfos>
          </>
        )}
      </Container>
    </>
  );
}

export default MenStoreItem;
