import React from "react";

import { Container } from "./styles";

function Button({ title, isActive, width, ...rest }) {
  return (
    <>
      <Container style={{ width: width }} {...rest}>
        {title}
      </Container>
    </>
  );
}

export default Button;
