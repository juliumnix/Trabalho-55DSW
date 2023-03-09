import React from "react";

import { Container } from "./styles";

function Input({
  type,
  placeholder,
  name,
  value,
  height,
  width,
  margin,
  onChange,
  disabled,
  ...rest
}) {
  return (
    <Container
      {...rest}
      type={type}
      placeholder={placeholder}
      style={{ height: height, width: width, margin: margin }}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}

export default Input;
