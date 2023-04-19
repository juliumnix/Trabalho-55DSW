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
  DivAnimation,
} from "./styles";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import UserService from "../../services/UserService";
import FinishScreen from "../FinishScreen";
import HistoryIcon from "@mui/icons-material/History";

function ShoppingCart() {
  const navigate = useNavigate();
  const { getUsuarioFromLocalState, clearUsuarioFromLocalState } = useUsuario();
  const [produtos, setProdutos] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const userService = new UserService();
  const [isFinalized, setIsFinalized] = useState(false);

  useEffect(() => {
    getTotal();
  }, []);

  function logout() {
    clearUsuarioFromLocalState();
    navigate("/");
  }

  async function getTotal() {
    let somatorio = 0;
    const user = await getUsuarioFromLocalState();
    const response = await userService.getShoppingCart(user.id);
    if (response.status === 200) {
      response.data.forEach(
        (item) => (somatorio += item.produto.preco * item.quantidade)
      );
      setProdutos(response.data);
      console.log(response.data);
      setValorTotal(somatorio.toFixed(2));
    } else {
      return;
    }
  }

  async function realizarCompra() {
    if (produtos.length === 0) {
      return;
    }

    const user = await getUsuarioFromLocalState();

    try {
      await userService.finalizarCompra(
        user.id,
        produtos,
        Number(valorTotal),
        true,
        false
      );

      await userService.removeAllItems(user.id);
      await getTotal();
      setIsFinalized(true);
    } catch (error) {
      // não finaliza a compra, pois ocorreu erro em alguma das requisitçoes
    }
  }

  return (
    <DivAnimation>
      {isFinalized ? (
        <DivAnimation>
          <FinishScreen
            address={getUsuarioFromLocalState().endEntrega}
            card={getUsuarioFromLocalState().numCartao}
          />
        </DivAnimation>
      ) : (
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
                  <ShoppingCartIcon
                    sx={{ fontSize: "4vh", cursor: "pointer" }}
                  />
                </ClickMenu>
                <Spacer />
                <ClickMenu
                  style={{ padding: 0 }}
                  onClick={() => navigate("/history")}
                >
                  <HistoryIcon sx={{ fontSize: "4vh", cursor: "pointer" }} />
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
                  key={produtoCarrinho.id}
                  style={{
                    height: "20vh",
                    marginBottom: "3vh",
                    marginRight: "1vw",
                    marginLeft: "2vw",
                  }}
                >
                  <ShoppingCartItem
                    id={produtoCarrinho.id}
                    valorTotal={valorTotal}
                    setValorTotal={setValorTotal}
                    setProdutos={setProdutos}
                    produtos={produtos}
                    titulo={produtoCarrinho.produto.descricao}
                    key={produtoCarrinho.id}
                    preco={produtoCarrinho.produto.preco}
                    quantidade={produtoCarrinho.quantidade}
                    tamanhos={produtoCarrinho.tamanho}
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
                    {getUsuarioFromLocalState().endEntrega}
                  </SubtitleBottom>
                </BottomItems>
                <Spacer />
                <BottomItems>
                  <TitleBottom>FORMA DE PAGAMENTO</TitleBottom>

                  <SubtitleBottom>
                    Cartão de crédito:
                    <br />
                    {getUsuarioFromLocalState().numCartao}
                  </SubtitleBottom>
                </BottomItems>
              </div>

              <ContainerPay>
                <ExternalContainer>
                  <InternalContainer>
                    <TextPay>Total</TextPay>
                    <TextPay>{valorTotal}</TextPay>
                  </InternalContainer>
                  <Button
                    onClick={() => realizarCompra()}
                    title="FINALIZAR COMPRA"
                  />
                </ExternalContainer>
              </ContainerPay>
            </ContainerBottom>
          </Container>
        </>
      )}
    </DivAnimation>
  );
}

export default ShoppingCart;
