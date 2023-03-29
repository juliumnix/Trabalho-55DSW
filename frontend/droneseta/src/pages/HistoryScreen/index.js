import React, { useEffect, useState } from "react";
import {
  ClickMenu,
  ItemButton,
  Logo,
  Spacer,
} from "../../components/Header/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Container, ContainerList } from "./styles";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useUsuario } from "../../hooks/UsuarioHook";
import TopHeader from "../../components/TopHeader";
import UserService from "../../services/UserService";
import HistoryIcon from "@mui/icons-material/History";
import HistoryItem from "../../components/HistoryItem";

function HistoryScreen() {
  const navigate = useNavigate();
  const userService = new UserService();
  const [historyProducts, setHistoryProducts] = useState([]);
  const { getUsuarioFromLocalState, clearUsuarioFromLocalState } = useUsuario();

  useEffect(() => {
    getHistory();
  }, []);

  function logout() {
    clearUsuarioFromLocalState();
    navigate("/");
  }

  async function getHistory() {
    const user = await getUsuarioFromLocalState();
    const { data } = await userService.getHistorico(user.id);
    setHistoryProducts(data);
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
        <TopHeader title="HISTÓRICO" />
        <ContainerList>
          {historyProducts.map((item) => (
            <div
              style={{
                marginBottom: "3vh",
                marginRight: "1vw",
                marginLeft: "2vw",
              }}
            >
              {item.produtos.map((produto) => (
                <HistoryItem
                  id={item.id}
                  price={item.valor}
                  product={produto}
                  isDelivered={item.entregue}
                />
              ))}
            </div>
          ))}
        </ContainerList>
      </Container>
    </>
  );
}

export default HistoryScreen;
