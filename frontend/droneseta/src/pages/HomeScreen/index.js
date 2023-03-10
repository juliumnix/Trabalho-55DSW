import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../hooks/UsuarioHook";
import Header from "../../components/Header";
import {
  ClickMenu,
  ItemButton,
  Logo,
  Spacer,
} from "../../components/Header/styles";
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
  ContainerCollectionButton,
} from "./styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
            <Spacer />
            <Logo
              src={require("../../assets/logo.png")}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/home");
              }}
            />
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
              style={{ padding: 0 }}
              onClick={() => {
                navigate("/shopping-cart");
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: "4vh", cursor: "pointer" }} />
            </ClickMenu>

            <Spacer />
            <ClickMenu style={{ padding: 0 }} onClick={logout}>
              <LogoutIcon sx={{ fontSize: "4vh", cursor: "pointer" }} />
            </ClickMenu>
            <Spacer />
          </>
        }
      />
      <Content>
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
              A nossa loja online de camisetas está lançando a sua mais nova
              coleção de produtos, com uma grande variedade de estilos, cores e
              tamanhos para todos os gostos.
            </p>
          </Paragraph>
          <ContainerCollectionButton>
            <CollectionButton
              onClick={() => {
                navigate("/products");
              }}
            >
              CONHEÇA A NOVA COLEÇÃO
              <ArrowForwardIosIcon style={{ fontSize: "1.2vw" }} />
            </CollectionButton>
          </ContainerCollectionButton>
        </InfoWrapper>
        <ImagemProvisoriaRemover src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/790/777/products/design-sem-nome-361-cb6ce444a4187b999916674541309536-1024-1024.webp" />
      </Content>
    </Container>
  );
}

export default HomeScreen;
