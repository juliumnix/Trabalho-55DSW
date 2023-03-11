import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../hooks/UsuarioHook";
import Header from "../../components/Header";
import TopHeader from "../../components/TopHeader";
import Button from "../../components/Button";
import ShoppingCartItem from "../../components/ShoppingCartItem";
import {
  ClickMenu,
  ItemButton,
  Logo,
  Spacer,
} from "../../components/Header/styles";
import {
  Container,
  ContainerList,
  BottomItems,
  ContainerBottom,
  TitleBottom,
  SubtitleBottom,
  ContainerPay,
  ExternalContainer,
  InternalContainer,
  TextPay,
} from "./styles";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserService from "../../services/UserService";

function ShoppingCart() {
  const navigate = useNavigate();
  const { clearUsuarioFromLocalState } = useUsuario();
  const [produtos, setProdutos] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const userService = new UserService();

  useEffect(() => {
    getTotal();
  }, []);

  function logout() {
    clearUsuarioFromLocalState();
    navigate("/");
  }

  async function getTotal() {
    let somatorio = 0;
    const response = await userService.getShoppingCart(4);
    if (response.status === 200) {
      response.data.forEach((item) => (somatorio += item.produto.preco));
      setProdutos(response.data);
      setValorTotal(somatorio.toFixed(2));
    } else {
      return;
    }
  }

  return (
    <>
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
      <Container>
        <TopHeader title="CARRINHO" />
        <ContainerList>
          {produtos.map((produtoCarrinho) => (
            <div
              key={produtoCarrinho.produto.id}
              style={{
                height: "20vh",
                marginBottom: 50,
                marginRight: 10,
                marginLeft: 20,
              }}
            >
              <ShoppingCartItem
                id={produtoCarrinho.produto.id}
                valorTotal={valorTotal}
                setValorTotal={setValorTotal}
                setProdutos={setProdutos}
                produtos={produtos}
                titulo={produtoCarrinho.produto.descricao}
                key={produtoCarrinho.produto.id}
                preco={produtoCarrinho.produto.preco}
                quantidade={produtoCarrinho.quantidade}
                tamanhos={produtoCarrinho.produto.tamanhos}
                urlImagem={produtoCarrinho.produto.urlImagem}
              />
            </div>
          ))}
        </ContainerList>
        <ContainerBottom>
          <div style={{ display: "flex" }}>
            <BottomItems>
              <TitleBottom>ENDEREÇO DE ENTREGA</TitleBottom>

              <SubtitleBottom>
                Rua João Bento da Silva Sauro, 2012 - Ibirama/SC <br /> CEP:
                89123-400
              </SubtitleBottom>
            </BottomItems>
            <Spacer />
            <BottomItems>
              <TitleBottom>FORMA DE PAGAMENTO</TitleBottom>

              <SubtitleBottom>
                Cartão de crédito:
                <br /> 3453 xxxx xxxx 9875
              </SubtitleBottom>
            </BottomItems>
          </div>

          <ContainerPay>
            <ExternalContainer>
              <InternalContainer>
                <TextPay>Total</TextPay>
                <TextPay>{valorTotal}</TextPay>
              </InternalContainer>
              <Button title="FINALIZAR COMPRA" />
            </ExternalContainer>
          </ContainerPay>
        </ContainerBottom>
      </Container>
    </>
  );
}

export default ShoppingCart;
