import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  ClickMenu,
  Container,
  ContainerProdutos,
  ItemButton,
  Logo,
  Spacer,
} from "./styles";
import TopHeader from "../../components/TopHeader";
import MenStoreItem from "../../components/MenStoreItem";

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
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    splitArrayToLines();
  }, []);

  function splitArrayToLines() {
    const arrayDeArrays = [];
    for (let index = 0; index < teste.length; index += 4) {
      arrayDeArrays.push(teste.slice(index, index + 4));
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
            <ItemButton>FEMININO</ItemButton>
            <Spacer />
            <ItemButton onClick={() => {}}>MASCULINO</ItemButton>
          </>
        }
        rightChildren={
          <>
            <ClickMenu onClick={() => {}}>
              <ShoppingCartIcon
                style={{ cursor: "pointer" }}
                fontSize="medium"
              />
            </ClickMenu>

            <Spacer />
            <ClickMenu onClick={() => {}}>
              <MenuIcon style={{ cursor: "pointer" }} fontSize="large" />
            </ClickMenu>
            <Spacer />
          </>
        }
      />
      <TopHeader title="MASCULINO" />
      <ContainerProdutos>
        {produtos.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
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
