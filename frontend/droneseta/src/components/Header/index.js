import React, { useState } from 'react';

import { Container, ItemContainer } from './styles';

function Header({leftChildren, rightChildren, dropdown}) {
  return (
    <>
      <Container>
        <ItemContainer>
        {leftChildren}
        </ItemContainer>

        <ItemContainer>
          {rightChildren}
        </ItemContainer>
      </Container>
      <>
      {dropdown}
      </>
    </>
    );
}

export default Header;