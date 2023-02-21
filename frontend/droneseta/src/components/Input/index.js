import React from 'react';

import { Container } from './styles';

function Input({type, placeholder, name, value, onChange}) {
  return <Container type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />;
}

export default Input;