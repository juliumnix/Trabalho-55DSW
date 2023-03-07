import React from "react";

import { Container, Decorator, Title } from "./styles";

function TopHeader({ title }) {
  return (
    <Container>
      <Decorator />
      <Title>{title}</Title>
    </Container>
  );
}

export default TopHeader;
