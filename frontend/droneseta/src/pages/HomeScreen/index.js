import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import {
  ClickMenu,
  ItemButton,
  Spacer,
  Logo,
} from "../../components/Header/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  Container,
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

function HomeScreen() {
  const navigate = useNavigate();
  const { setUsuarioFromLocalState, clearUsuarioFromLocalState } = useUsuario();

  useEffect(() => {
    setUsuarioFromLocalState();
  }, []);

  function logout() {
    clearUsuarioFromLocalState();
    navigate("/");
  }

  return (
    <Container>
      <Header
        leftChildren={
          <>
            <Logo src={require("../../assets/logo.png")} />
            <Spacer />
            <ItemButton
              onClick={() => {
                navigate("/products");
              }}
            >
              PRODUTOS
            </ItemButton>
          </>
        }
        rightChildren={
          <>
            <ClickMenu
              onClick={() => {
                navigate("/shoppingCart");
              }}
            >
              <ShoppingCartIcon
                style={{ cursor: "pointer" }}
                fontSize="medium"
              />
            </ClickMenu>

            <Spacer />
            <ClickMenu onClick={logout}>
              <LogoutIcon style={{ cursor: "pointer" }} fontSize="medium" />
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
