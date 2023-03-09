import React from "react";

import { Container } from "./styles";

function Button({ title, isActive, height, width, padding, ...rest }) {
  return (
    <>
      <Container
        style={{ height: height, width: width, padding: padding }}
        {...rest}
      >
        {title}
      </Container>
    </>
  );
}

export default Button;
