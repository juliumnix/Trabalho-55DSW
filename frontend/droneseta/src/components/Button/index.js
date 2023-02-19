import React from 'react';

import { ContainerActive, ContainerInactive } from './styles';

function Button({title, isActive}) {
  return (
    <>
    {isActive ?  <ContainerActive>
        {title}
    </ContainerActive> : 
        <ContainerInactive>
        {title}
     </ContainerInactive>}
   
    </>
    );
}

export default Button;