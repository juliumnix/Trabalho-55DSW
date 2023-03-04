import React from 'react';

import { Container } from './styles';

function Input({type, placeholder, name, value, width, onChange, ...rest}) {
  return <Container {...rest} type={type} placeholder={placeholder} style={{width: width}} name={name} value={value} onChange={onChange} />;
}

export default Input;