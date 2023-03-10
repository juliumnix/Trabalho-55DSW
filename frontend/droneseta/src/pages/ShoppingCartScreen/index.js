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
const teste = [
  {
    id: 1,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 2,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 3,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 4,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 5,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 6,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 7,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 8,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 9,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 10,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 11,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 12,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 13,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 14,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 15,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 16,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 17,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 18,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 19,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 20,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 21,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 22,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 23,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 24,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 25,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 26,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 27,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 28,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 29,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 30,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 31,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 32,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 33,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 34,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 36,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 37,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
  {
    id: 38,
    descricao: "Camiseta Branca Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 49.99,
    tamanhos: [
      {
        id: 1,
        sigla: "PP",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 39,
    descricao: "Camiseta AZUL Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 80.0,
    tamanhos: [
      {
        id: 1,
        sigla: "GG",
      },
      {
        id: 2,
        sigla: "G",
      },
    ],
  },
  {
    id: 40,
    descricao: "Camiseta KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK Masculina",
    urlImagem:
      "https://img.elo7.com.br/product/zoom/366D2CF/camisetas-branca-masculina-basica-algodao-100-atacado-revenda.jpg",
    preco: 10.99,
    tamanhos: [
      {
        id: 1,
        sigla: "M",
      },
      {
        id: 2,
        sigla: "PP",
      },
    ],
  },
];

function ShoppingCart() {
  const navigate = useNavigate();
  const { clearUsuarioFromLocalState } = useUsuario();
  const [produtos, setProdutos] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    getTotal();
  }, []);

  function logout() {
    clearUsuarioFromLocalState();
    navigate("/");
  }

  function getTotal() {
    let somatorio = 0;
    teste.forEach((item) => (somatorio += item.preco));
    setProdutos(teste);
    setValorTotal(somatorio.toFixed(2));
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
      <Container>
        <TopHeader title="CARRINHO" />
        <ContainerList>
          {produtos.map((produto) => (
            <div
              key={produto.id}
              style={{
                height: "20vh",
                marginBottom: 50,
                marginRight: 10,
                marginLeft: 20,
              }}
            >
              <ShoppingCartItem
                id={produto.id}
                valorTotal={valorTotal}
                setValorTotal={setValorTotal}
                setProdutos={setProdutos}
                produtos={produtos}
                titulo={produto.descricao}
                key={produto.id}
                preco={produto.preco}
                quantidade={1}
                tamanhos={produto.tamanhos}
                urlImagem={produto.urlImagem}
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
