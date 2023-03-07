import React from "react";

import { Container } from "./styles";

function Button({ title, isActive, ...rest }) {
  return (
    <>
      <Container {...rest}>{title}</Container>
    </>
  );
}

export default Button;
