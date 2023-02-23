import React, { useState } from 'react';
import Button from '../../components/Button';
import Header from '../../components/Header';
import MenuIcon from '@mui/icons-material/Menu';

import { ClickMenu, Container, ContainerSidebar, ItemButton, Logo, Spacer } from './styles';

function HomeScreen() {
  const [visibleSidebar, setVisibleSide] = useState(false);

  const handleClick = () => {
    setVisibleSide(!visibleSidebar);
  };
  return (<Container>
    <Header 
    dropdown={visibleSidebar && 
      <ContainerSidebar>
        <Button title="Botão 1" isActive={true}/>
        <Button title="Botão 2" onClick={handleClick}/>
        <Button title="Botão 3" />
      </ContainerSidebar>}
    leftChildren={<>
    <Logo src={require("../../assets/logo.png")}/>
          <Spacer />
          <ItemButton>FEMININO</ItemButton>
          <Spacer />
          <ItemButton>MASCULINO</ItemButton></>} 
    rightChildren={<>
    <ItemButton>CARRINHO</ItemButton>
          <Spacer />
          <ClickMenu onClick={handleClick}>
          <MenuIcon style={{cursor: "pointer"}} fontSize='large'/>
          </ClickMenu>
          <Spacer /> 
          </>}>
    <h1>oi</h1>
    </Header><Button /></Container>);
}

export default HomeScreen;