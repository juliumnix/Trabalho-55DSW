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
  CollectionButtonContent,
  CollectionButtonIconWrapper,
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
              onClick={() => {
                navigate("/shopping-cart");
              }}
            >
              <ShoppingCartIcon
                style={{ fontSize: "4vh", cursor: "pointer" }}
              />
            </ClickMenu>

            <Spacer />
            <ClickMenu onClick={logout}>
              <LogoutIcon style={{ fontSize: "4vh", cursor: "pointer" }} />
            </ClickMenu>
            <Spacer />
          </>
        }
      />
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
          <CollectionButton
            onClick={() => {
              navigate("/products");
            }}
          >
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
