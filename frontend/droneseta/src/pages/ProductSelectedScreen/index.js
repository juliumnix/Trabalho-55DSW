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
  Price,
  ContainerImagem,
  InputCheckBox,
  Label,
  DivSizes,
  Divider,
} from "./styles";
import Header from "../../components/Header";
import ProductService from "../../services/ProductService";

export default function ProductSelectedScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const productService = new ProductService();
  const [product, setProduct] = useState("");
  const sizeSelected =
  {
    "sigla": "",
    "ativo": false
  }

  useEffect(() => {
    initProduct();
  }, []);

  async function initProduct() {
    const { data } = await productService.resgataProduto(id);
    setProduct(data);
  }

  function logout() {
    console.log(product.descricao);
    navigate("/");
  }

  function verifySize(sigla, checked){
    sizeSelected.sigla = sigla;
    sizeSelected.ativo = checked;
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
          <CardLeft>
            <ContainerImagem src={product.urlImagem} />
          </CardLeft>
          <CardRight>
            <DivInfos>
              <div>
                <Title>{product.descricao}</Title>
              </div>
              <Divider/>
              <div>
                <Price>{product.preco}</Price>
              </div>
            </DivInfos>
            <DivSizes>
                {product.estoques?.map((estoque) => (
                  estoque.quantidade > 0 ?
                  <div>
                    <InputCheckBox id={estoque.id} type="checkbox" onChange={(event) => verifySize(estoque.tamanho.sigla, event.target.checked)} />
                    <Label htmlFor={estoque.id}>{estoque.tamanho.sigla}</Label>
                  </div> :
                  <div></div>
                ))}
              </DivSizes>
            <DivButton>
              <CollectionButton>ADICIONAR AO CARRINHO</CollectionButton>
            </DivButton>
          </CardRight>
        </Card>
      </Container>
    </>
  );
}
