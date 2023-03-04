import { useState, React } from "react";
import Header from '../../../components/Header';
import { Logo, ItemButton, Spacer, ContainerRight, ContainerLeft, Label, InputCheckBox, ItemContainer, InputImage, UploadImage, UploadLabel } from "./styles";
import ImageButton from "../../../components/ImageButton";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ProductService from "../../../services/ProductService";

export default function RegisterScreen() {

  const [dsc, setDsc] = useState('');
  const [price, setPrice] = useState(0);
  const [qtdPP, setQtdPP] = useState('');
  const [qtdP, setQtdP] = useState('');
  const [qtdM, setQtdM] = useState('');
  const [qtdG, setQtdG] = useState('');
  const [qtdGG, setQtdGG] = useState('');
  const [pp, setPP] = useState(false);
  const [p, setP] = useState(false);
  const [m, setM] = useState(false);
  const [g, setG] = useState(false);
  const [gg, setGG] = useState(false);
  const [file, setFile] = useState()
  const productService = new ProductService();
  let sizes = '';
  const jsonSizes = [
    {
      "sigla": "PP",
      "ativo": pp,
      "quantidade": qtdPP
    }, {
      "sigla": "P",
      "ativo": p,
      "quantidade": qtdP
    }, {
      "sigla": "M",
      "ativo": m,
      "quantidade": qtdM
    }, {
      "sigla": "G",
      "ativo": g,
      "quantidade": qtdG
    }, {
      "sigla": "GG",
      "ativo": gg,
      "quantidade": qtdGG
    }
  ]
  const arrayEstoque = [];
  const arrayTamanho = [];

  async function registerHandler() {
    const { data } = await productService.resgataTamanhos();
    sizes = data;
    for (let i = 0; i < jsonSizes.length; i++) {
      //Caminha pelo array de json verificando qual dos tamanhos foi selecionado pelo usuário
      if (jsonSizes[i].ativo) {
        //Chama o método passando o json
        getId(jsonSizes[i]);
      }
    }
    productService.cadastraProduto(createJson());
    cleanFields();
  }

  function getId(jsonPosition) {
    //Caminha pela lista de tamanhos vinda do banco
    for (let i = 0; i < sizes.length; i++) {
      //Se a sigla da lista de tamanho for igual a sigla do json que o usuario selecionou
      if (sizes[i].sigla === jsonPosition.sigla) {
        //Cria um json de estoque contendo o id do tamanho e a quantidade especificada pro tamanho
        const jsonTamanho = {
          "id": sizes[i].id
        }
        const jsonEstoque = {
          "tamanho": {
            "id": sizes[i].id
          },
          "quantidade": jsonPosition.quantidade
        }
        //Adiciona no array de estoque
        arrayEstoque.push(jsonEstoque);
        //Adiciona no array de tamanhos
        arrayTamanho.push(jsonTamanho);
      }
    }
  }

  function createJson() {
    return {
      "descricao": dsc,
      "urlImagem": "imagem",
      "preco": price,
      "tamanhos": arrayTamanho,
      "estoques": arrayEstoque
    }
  }

  function cleanFields() {
    setPP(false);
    setP(false);
    setM(false);
    setG(false);
    setGG(false);
    setQtdPP('');
    setQtdP('');
    setQtdM('');
    setQtdG('');
    setQtdGG('');
    setDsc('');
    setPrice(0);
  }

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <>
      <Header leftChildren={
        <>
          <Logo src={require("../../../assets/logo.png")} />
          <Spacer />
          <ItemButton>CADASTRO PRODUTOS</ItemButton>
        </>
      }
        rightChildren={
          <>
            <Spacer />
            <ImageButton image={require("../../../assets/logout.png")} width={"30vw"} height={"30vh"} />
            <Spacer />
          </>
        }
      />
      <ContainerLeft>
        <div>
          <InputImage id="inputImage" type="file" name="file" accept="image/png, image/jpeg" multiple onChange={handleChange} />
          <UploadLabel htmlFor="inputImage"><UploadImage src={require("../../../assets/upload_image.png")} /></UploadLabel>
        </div>
        <div>
          <Input type="text" placeholder="Descrição" name="dsc" value={dsc} onChange={(event) => setDsc(event.target.value)} />
        </div>
        <div>
          <Input type="number" placeholder="Preço" name="price" value={price} onChange={(event) => setPrice(event.target.value)} />
        </div>
        <ItemContainer>
          <div>
            <InputCheckBox id="PPsize" type="checkbox" onChange={(event) => setPP(event.target.checked)} />
            <Label htmlFor="PPsize">PP</Label>
          </div>
          <div>
            <Input disabled={!pp} type="number" placeholder="Quantidade" name="qtdPP" value={qtdPP} width={"170px"} onChange={(event) => setQtdPP(event.target.value)} />
          </div>
        </ItemContainer>

        <ItemContainer>
          <div>
            <InputCheckBox id="Psize" type="checkbox" onChange={(event) => setP(event.target.checked)} />
            <Label htmlFor="Psize">P</Label>
          </div>
          <div>
            <Input disabled={!p} type="number" placeholder="Quantidade" name="qtdP" value={qtdP} width={"170px"} onChange={(event) => setQtdP(event.target.value)} />
          </div>
        </ItemContainer>

        <ItemContainer>
          <div>
            <InputCheckBox id="Msize" type="checkbox" onChange={(event) => setM(event.target.checked)} />
            <Label htmlFor="Msize">M</Label>
          </div>
          <div>
            <Input disabled={!m} type="number" placeholder="Quantidade" name="qtdM" value={qtdM} width={"170px"} onChange={(event) => setQtdM(event.target.value)} />
          </div>
        </ItemContainer>
        <ItemContainer>
          <div>
            <InputCheckBox id="Gsize" type="checkbox" onChange={(event) => setG(event.target.checked)} />
            <Label htmlFor="Gsize">G</Label>
          </div>
          <div>
            <Input disabled={!g} type="number" placeholder="Quantidade" name="qtdG" value={qtdG} width={"170px"} onChange={(event) => setQtdG(event.target.value)} />
          </div>
        </ItemContainer>
        <ItemContainer>
          <div>
            <InputCheckBox id="GGsize" type="checkbox" onChange={(event) => setGG(event.target.checked)} />
            <Label htmlFor="GGsize">GG</Label>
          </div>
          <div>
            <Input disabled={!gg} type="number" placeholder="Quantidade" name="qtdGG" value={qtdGG} width={"170px"} onChange={(event) => setQtdGG(event.target.value)} />
          </div>
        </ItemContainer>
        <div>
          <Button title={"CADASTRAR"} onClick={registerHandler} />
        </div>
      </ContainerLeft>
      <ContainerRight>
        <table>
        
        </table>
      </ContainerRight>
    </>

  );
}