import { useState, React, useEffect } from "react";
import Header from "../../../components/Header";
import {
  ItemButton,
  Spacer,
  ContainerRight,
  ContainerLeft,
  Label,
  InputCheckBox,
  ItemContainer,
  InputImage,
  UploadImage,
  UploadLabel,
  TableProduct,
  TableHeader,
  TableData,
  ContainerCad,
} from "./styles";
import { Logo } from "../../../components/Header/styles";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ProductService from "../../../services/ProductService";
import TopHeader from "../../../components/TopHeader";
import { ClickMenu } from "../../../components/Header/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import UploadImageService from "../../../services/UploadImageService";

export default function RegisterScreen() {
  const [dsc, setDsc] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState();
  const productService = new ProductService();
  const uploadImageService = new UploadImageService();
  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState([]);
  const navigate = useNavigate();
  const [jsonSizes, setJsonSizes] = useState([]);
  const arrayEstoque = [];
  const arrayTamanho = [];

  useEffect(() => {
    load();
  }, []);

  async function load() {
    await initProduct();
    await initSize();
  }

  async function initJsonSizes(data) {
    const json = [];
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      json.push({
        sigla: data[i].sigla,
        ativo: false,
        quantidade: "",
      });
    }
    setJsonSizes(json);
  }

  async function initProduct() {
    const { data } = await productService.resgataProdutos();
    setProducts(data);
  }

  async function initSize() {
    const { data } = await productService.resgataTamanhos();
    setSizes(data);
    await initJsonSizes(data);
  }

  async function registerHandler() {
    handleSubmit();
    if (validateFields()) {
      for (let i = 0; i < jsonSizes.length; i++) {
        //Caminha pelo array de json verificando qual dos tamanhos foi selecionado pelo usuário
        if (jsonSizes[i].ativo) {
          //Chama o método passando o json
          getEstoqueETamanho(jsonSizes[i]);
        }
      }
      await productService.cadastraProduto(createJson());
      cleanFields();
      initProduct();
    }
  }

  function getEstoqueETamanho(jsonPosition) {
    //Caminha pela lista de tamanhos vinda do banco
    for (let i = 0; i < sizes.length; i++) {
      //Se a sigla da lista de tamanho for igual a sigla do json que o usuario selecionou
      if (sizes[i].sigla === jsonPosition.sigla) {
        //Cria um json de estoque contendo o id do tamanho e a quantidade especificada pro tamanho
        const jsonTamanho = {
          id: sizes[i].id,
        };
        const jsonEstoque = {
          tamanho: {
            id: sizes[i].id,
          },
          quantidade: jsonPosition.quantidade,
        };
        //Adiciona no array de estoque
        arrayEstoque.push(jsonEstoque);
        //Adiciona no array de tamanhos
        arrayTamanho.push(jsonTamanho);
      }
    }
  }

  function createJson() {
    return {
      descricao: dsc,
      urlImagem: file.name,
      preco: price,
      tamanhos: arrayTamanho,
      estoques: arrayEstoque,
    };
  }

  function cleanFields() {}

  function validateFields() {
    let aux = 0;
    jsonSizes.forEach((element) => {
      if (element.ativo && element.quantidade === "") {
        aux++;
      }
    });
    return dsc !== "" && price !== "" && aux === 0;
  }

  function validateSizes(estoques, tamanho) {
    const lista = [];
    for (let i = 0; i < estoques.length; i++) {
      if (estoques[i].tamanho.sigla === tamanho) {
        lista.push(estoques[i].quantidade);
      }
    }
    return lista;
  }

  function logout() {
    localStorage.clear();
    navigate("/admin");
  }

  function verifySize(sigla, checked) {
    jsonSizes.forEach(function (size) {
      if (size.sigla === sigla) {
        size.ativo = checked;
        const element = document.getElementById("qtd" + sigla);
        console.log(element);
        element.disabled = !checked;
      }
    });
  }

  function changeValueQtd(value, sigla) {
    jsonSizes.forEach(function (size) {
      if (size.sigla === sigla) {
        size.quantidade = value;
      }
    });
  }

  async function handleSubmit() {
    const formData = new FormData();
    formData.append("file", file);
    await uploadImageService.uploadImage(formData);
  }

  return (
    <>
      <Header
        leftChildren={
          <>
            <Logo src={require("../../../assets/logo.png")} />
            <Spacer />
            <ItemButton>CADASTRO PRODUTOS</ItemButton>
          </>
        }
        rightChildren={
          <>
            <ClickMenu onClick={logout}>
              <LogoutIcon sx={{ fontSize: "4vh", cursor: "pointer" }} />
            </ClickMenu>
          </>
        }
      />
      <ContainerLeft>
        <div>
          <TopHeader title={"CADASTRO DE PRODUTOS"} />
        </div>
        <ContainerCad>
          <div>
            <InputImage
              id="inputImage"
              type="file"
              name="file"
              accept="image/png, image/jpeg"
              multiple
              onChange={(event) => setFile(event.target.files[0])}
            />
            <UploadLabel htmlFor="inputImage">
              <UploadImage src={require("../../../assets/upload_image.png")} />
            </UploadLabel>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Descrição"
              name="dsc"
              value={dsc}
              onChange={(event) => setDsc(event.target.value)}
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Preço"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>

          {sizes.map((size, index) => (
            <ItemContainer key={index}>
              <div key={index}>
                <InputCheckBox
                  id={size.id}
                  type="checkbox"
                  onChange={(event) => {
                    verifySize(size.sigla, event.target.checked);
                  }}
                />
                <Label htmlFor={size.id}>{size.sigla}</Label>
              </div>
              <div>
                <Input
                  id={"qtd" + size.sigla}
                  type="number"
                  placeholder="Quantidade"
                  width={"170px"}
                  disabled={true}
                  onChange={(event) =>
                    changeValueQtd(event.target.value, size.sigla)
                  }
                />
              </div>
            </ItemContainer>
          ))}
          <div>
            <Button
              type="submit"
              title={"CADASTRAR"}
              onClick={registerHandler}
            />
          </div>
        </ContainerCad>
      </ContainerLeft>
      <ContainerRight>
        <TableProduct>
          <thead>
            <tr>
              <TableHeader>Descrição</TableHeader>
              <TableHeader>Preço</TableHeader>
              {sizes.map((size, index) => (
                <TableHeader key={index}>ESTOQUE {size.sigla}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <TableData>{product.descricao}</TableData>
                <TableData>{product.preco}</TableData>
                {sizes.map((size, index) => (
                  <TableData key={index}>
                    {validateSizes(product.estoques, size.sigla)}
                  </TableData>
                ))}
              </tr>
            ))}
          </tbody>
        </TableProduct>
      </ContainerRight>
    </>
  );
}
