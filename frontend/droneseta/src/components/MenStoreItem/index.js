import React from "react";

import {
  Container,
  ContainerImagem,
  ContainerInfos,
  Price,
  Title,
} from "./styles";

function MenStoreItem({ imagem, titulo, preco, ...rest }) {
  return (
    <Container {...rest}>
      <ContainerImagem src={imagem} />
      <ContainerInfos>
        <Title>{titulo}</Title>
        <Price>R$ {preco}</Price>
      </ContainerInfos>
    </Container>
  );
}

export default MenStoreItem;
