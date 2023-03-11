import { useState, React, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ClickMenu,
  ItemButton,
  Logo,
  Spacer,
} from "../../components/Header/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Container,
  Card,
  CardLeft,
  CardRight,
  CollectionButton,
  DivInfos,
  DivButton,
  Title,
} from "./styles";
import Header from "../../components/Header";
import ProductService from "../../services/ProductService";

export default function ProductSelectedScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const productService = new ProductService();
  const [product, setProduct] = useState("");

  useEffect(() => {
    initProduct();
  }, []);

  async function initProduct() {
    const { data } = await productService.resgataProduto(id);
    console.log(data);
    setProduct(data);
  }

  function logout() {
    console.log(product.descricao);
    navigate("/");
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
        <Card>
          <CardLeft></CardLeft>
          <CardRight>
            <DivInfos>
              <Title>{product.descricao}</Title>
            </DivInfos>
            <DivButton>
              <CollectionButton>ADICIONAR AO CARRINHO</CollectionButton>
            </DivButton>
          </CardRight>
        </Card>
      </Container>
    </>
  );
}
