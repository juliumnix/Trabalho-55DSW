import React, { useEffect } from "react";

import {
  Container,
  ContainerImage,
  ContainerLeft,
  Content,
  DeliveredContainer,
  TextInformaticon,
} from "./styles";

function HistoryItem({ price, id, product, isDelivered }) {
  return (
    <Container>
      <Content>
        <ContainerImage src={product.produto.urlImagem} />
        <div>
          <TextInformaticon style={{ marginBottom: "1vh" }}>
            Pedido número: {id}
          </TextInformaticon>
          <TextInformaticon> R$ {price}</TextInformaticon>
        </div>
      </Content>
      <ContainerLeft>
        {isDelivered ? (
          <DeliveredContainer style={{ borderColor: "green", color: "green" }}>
            Entregue
          </DeliveredContainer>
        ) : (
          <DeliveredContainer style={{ borderColor: "red", color: "red" }}>
            Não entregue
          </DeliveredContainer>
        )}
      </ContainerLeft>
    </Container>
  );
}

export default HistoryItem;
