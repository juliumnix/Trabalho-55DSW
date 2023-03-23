import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../hooks/UsuarioHook";
import Header from "../../components/Header";
import TopHeader from "../../components/TopHeader";
import MenStoreItem from "../../components/MenStoreItem";
import {
  ClickMenu,
  ItemButton,
  Logo,
  Spacer,
} from "../../components/Header/styles";
import { Container, ContainerProdutos } from "./styles";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductService from "../../services/ProductService";

function MenStoreScreen() {
  const navigate = useNavigate();
  const { clearUsuarioFromLocalState } = useUsuario();
  const [produtos, setProdutos] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    splitArrayToLines();
  }, []);

  function logout() {
    clearUsuarioFromLocalState();
    navigate("/");
  }

  async function splitArrayToLines() {
    const response = await productService.resgataProdutos();
    console.log(response);
    const arrayDeArrays = [];
    for (let index = 0; index < response.data.length; index += 4) {
      arrayDeArrays.push(response.data.slice(index, index + 4));
    }
    setProdutos(arrayDeArrays);
  }

  function onRowSelect(id) {
    navigate(`/product-selected/${id}`);
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
      <TopHeader title="PRODUTOS" />
      <ContainerProdutos>
        {produtos.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            {item.map((subitem, index) => (
              <MenStoreItem
                key={index}
                onClick={() => {
                  onRowSelect(subitem.id);
                }}
                titulo={subitem.descricao}
                imagem={subitem.urlImagem}
                preco={subitem.preco}
              />
            ))}
          </div>
        ))}
      </ContainerProdutos>
    </Container>
  );
}

export default MenStoreScreen;
