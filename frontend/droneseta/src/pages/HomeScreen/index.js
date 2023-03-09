import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  ClickMenu,
  Container,
  ItemButton,
  Logo,
  Spacer,
  Content,
  InfoWrapper,
  ContainerTitleBar,
  TitleBar,
  Title,
  Paragraph,
  CollectionButton,
  ImagemProvisoriaRemover,
  CollectionButtonContent,
  CollectionButtonIconWrapper,
} from "./styles";
import { useUsuario } from "../../hooks/UsuarioHook";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const [visibleSidebar, setVisibleSide] = useState(false);
  const { setUsuarioFromLocalState, clearUsuarioFromLocalState, getUsuario } =
    useUsuario();
  const navigate = useNavigate();

  useEffect(() => {
    setUsuarioFromLocalState();
  }, []);

  const handleClick = () => {
    setVisibleSide(!visibleSidebar);
  };

  function navigateToMenStore() {
    navigate("/menStore");
  }
  return (
    <Container>
      <Header
        leftChildren={
          <>
            <Logo src={require("../../assets/logo.png")} />
            <Spacer />
            <ItemButton>FEMININO</ItemButton>
            <Spacer />
            <ItemButton onClick={navigateToMenStore}>MASCULINO</ItemButton>
          </>
        }
        rightChildren={
          <>
            <ClickMenu onClick={handleClick}>
              <ShoppingCartIcon
                style={{ cursor: "pointer" }}
                fontSize="medium"
              />
            </ClickMenu>

            <Spacer />
            <ClickMenu onClick={handleClick}>
              <MenuIcon style={{ cursor: "pointer" }} fontSize="large" />
            </ClickMenu>
            <Spacer />
          </>
        }
      ></Header>
      <Content>
        <ImagemProvisoriaRemover />
        <InfoWrapper>
          <ContainerTitleBar>
            <TitleBar>
              <Title>
                <b>
                  NOVA
                  <br />
                  COLEÇÃO
                </b>
              </Title>
            </TitleBar>
          </ContainerTitleBar>
          <Paragraph>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </Paragraph>
          <CollectionButton>
            <CollectionButtonContent>
              CONHEÇA A NOVA COLEÇÃO
              <CollectionButtonIconWrapper>
                <ArrowForwardIosIcon />
              </CollectionButtonIconWrapper>
            </CollectionButtonContent>
          </CollectionButton>
        </InfoWrapper>
      </Content>
    </Container>
  );
}

export default HomeScreen;
