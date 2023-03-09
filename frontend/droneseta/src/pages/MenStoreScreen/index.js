import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../hooks/UsuarioHook";
import Header from "../../components/Header";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ClickMenu, Container, ContainerProdutos } from "./styles";
import TopHeader from "../../components/TopHeader";
import MenStoreItem from "../../components/MenStoreItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { ItemButton, Logo, Spacer } from "../../components/Header/styles";
import ProductService from "../../services/ProductService";

const teste = [
  {
    id: 1,
    descricao: "Camiseta Branca Masculina",
    urlImagem: "https://pbs.twimg.com/media/EXSG-shXQAUAati.jpg",
    preco: 10.0,
  },
  {
    id: 2,
    descricao: "Camiseta preta Masculina",
    urlImagem:
      "https://images3.memedroid.com/images/UPLOADED348/5cf29f4784c26.jpeg",
    preco: 20.0,
  },
  {
    id: 3,
    descricao: "Camiseta 3 Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 30.0,
  },
  {
    id: 4,
    descricao: "Camiseta 4 Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 40.0,
  },

  {
    id: 5,
    descricao: "Camiseta 5 Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 50.0,
  },
  {
    id: 6,
    descricao: "Camiseta 6 Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 60.0,
  },
  {
    id: 7,
    descricao: "Camiseta 7 Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 70.0,
  },
  {
    id: 8,
    descricao: "Camiseta 7 Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
  },
  {
    id: 9,
    descricao: "Camiseta 7 Masculina",
    urlImagem:
      "https://images3.memedroid.com/images/UPLOADED348/5cf29f4784c26.jpeg",
    preco: 80.0,
  },
];

function MenStoreScreen() {
  const navigate = useNavigate();
  const productService = new ProductService();
  const { clearUsuarioFromLocalState } = useUsuario();
  const [produtos, setProdutos] = useState([]);

  function logout() {
    clearUsuarioFromLocalState();
    navigate("/");
  }

  useEffect(() => {
    splitArrayToLines();
  }, []);

  async function splitArrayToLines() {
    const response = await productService.resgataProdutos();
    console.log(response);
    const arrayDeArrays = [];
    for (let index = 0; index < response.data.length; index += 4) {
      arrayDeArrays.push(response.data.slice(index, index + 4));
    }
    setProdutos(arrayDeArrays);
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
            {item.map((subitem) => (
              <MenStoreItem
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
