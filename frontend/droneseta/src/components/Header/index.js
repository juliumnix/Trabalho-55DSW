import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { Container, ItemButton, ItemContainer, Spacer, Logo, ClickMenu, ContainerSidebar } from './styles';
import Button from '../Button';

function Header() {
  const [visibleSidebar, setVisibleSide] = useState(false);

  const handleClick = () => {
    setVisibleSide(!visibleSidebar);
  };

  return (
    <>
      <Container>
        <ItemContainer>
        <Logo src={require("../../assets/logo.png")}/>
          <Spacer />
          <ItemButton>FEMININO</ItemButton>
          <Spacer />
          <ItemButton>MASCULINO</ItemButton>
        </ItemContainer>

        <ItemContainer>
          <ItemButton>CARRINHO</ItemButton>
          <Spacer />
          <ClickMenu onClick={handleClick}>
          <MenuIcon fontSize='large'/>
          </ClickMenu>
          <Spacer />
        </ItemContainer>
      </Container>
      {visibleSidebar && 
        <ContainerSidebar>
          <Button title="Botão 1" isActive={true}/>
          <Button title="Botão 2" />
          <Button title="Botão 3" />
        </ContainerSidebar> }
    </>
    );
}

export default Header;