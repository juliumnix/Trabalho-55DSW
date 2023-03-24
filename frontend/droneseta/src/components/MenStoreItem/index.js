import React from "react";
import Loading from "../Loading";

import {
  Container,
  ContainerImagem,
  ContainerInfos,
  Price,
  Title,
} from "./styles";

function MenStoreItem({ imagem, titulo, preco, isLoading, ...rest }) {
  return (
    <>
      <Container {...rest}>
        {isLoading ? (
          <Loading isBlack />
        ) : (
          <>
            <ContainerImagem src={imagem} />
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
