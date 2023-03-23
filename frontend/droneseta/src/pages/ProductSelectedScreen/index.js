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
import SizesService from "../../services/SizesService";
import UserService from "../../services/UserService";
import { useUsuario } from "../../hooks/UsuarioHook";

export default function ProductSelectedScreen() {
  const navigate = useNavigate();
  const { getUsuarioFromLocalState } = useUsuario();
  const { id } = useParams();
  const productService = new ProductService();
  const userService = new UserService();
  const [product, setProduct] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const sizesService = new SizesService();

  useEffect(() => {
    initProduct();
  }, []);

  async function initProduct() {
    const { data } = await productService.resgataProduto(id);
    setProduct(data);
  }

  function logout() {
    navigate("/");
  }

  async function addSizeSelected(sigla) {
    const { data } = await sizesService.getSizes();
    let id = null;
    data.forEach((item) => {
      if (item.sigla === sigla) {
        id = item.id;
      }
    });
    const novoArray = selectedSizes;
    const json = {
      sigla: sigla,
      id: id,
    };
    novoArray.push(json);
    setSelectedSizes(novoArray);
  }

  async function removeSizeSelected(sigla) {
    const novoArray = [...selectedSizes];
    const novaLista = novoArray.filter((item) => item.sigla !== sigla);
    setSelectedSizes(novaLista);
  }

  function verifySize(sigla, checked) {
    if (checked) {
      addSizeSelected(sigla, checked);
    } else {
      removeSizeSelected(sigla);
    }
  }

  async function sendProductsToShoppingCart() {
    const user = getUsuarioFromLocalState();
    console.log(user.id);
    selectedSizes.forEach(async (item) => {
      const jsonProduto = {
        id: id,
      };
      await userService.addCarrinho(user.id, jsonProduto, item, 1);
    });
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
              <Divider />
              <div>
                <Price>{product.preco}</Price>
              </div>
            </DivInfos>
            <DivSizes>
              {product.estoques?.map((estoque) =>
                estoque.quantidade > 0 ? (
                  <div key={estoque.id}>
                    <InputCheckBox
                      key={estoque.id}
                      id={estoque.id}
                      type="checkbox"
                      onChange={(event) =>
                        verifySize(estoque.tamanho.sigla, event.target.checked)
                      }
                    />
                    <Label htmlFor={estoque.id}>{estoque.tamanho.sigla}</Label>
                  </div>
                ) : (
                  <div></div>
                )
              )}
            </DivSizes>
            <DivButton>
              <CollectionButton
                onClick={() => {
                  sendProductsToShoppingCart();
                }}
              >
                ADICIONAR AO CARRINHO
              </CollectionButton>
            </DivButton>
          </CardRight>
        </Card>
      </Container>
    </>
  );
}
