import { useState, React } from "react";
import Header from '../../../components/Header';
import { Logo, ItemButton, Spacer, ContainerRight, ContainerLeft, Label, InputCheckBox, ItemContainer, InputImage, UploadImage, UploadLabel } from "./styles";
import ImageButton from "../../../components/ImageButton";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function RegisterScreen() {

  const [dsc, setDsc] = useState('');
  const [price, setPrice] = useState('');
  const [qtd, setQtd] = useState('');
  const [pp, setPP] = useState(false);
  const [p, setP] = useState(false);
  const [m, setM] = useState(false);
  const [g, setG] = useState(false);
  const [gg, setGG] = useState(false);

  function registerHandler() {
    var file = document.getElementById('inputImage');
    var filename = file.value;
    console.log(filename);
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
          <InputImage id="inputImage" type="file" name="file" accept="image/png, image/jpeg" multiple />
          <UploadLabel htmlFor="inputImage"><UploadImage src={require("../../../assets/upload_image.png")}/></UploadLabel>
        </div>
        <div>
          <Input type="text" placeholder="Descrição" name="dsc" value={dsc} width={"150vw"} onChange={(event) => setDsc(event.target.value)} />
        </div>
        <div>
          <Input type="text" placeholder="Preço" name="price" value={price} onChange={(event) => setPrice(event.target.value)} />
        </div>
        <div>
          <Input type="text" placeholder="Quantidade" name="qtd" value={qtd} onChange={(event) => setQtd(event.target.value)} />
        </div>
        <ItemContainer>
          <div>
            <InputCheckBox id="PPsize" type="checkbox" onChange={(event) => setPP(event.target.checked)} />
            <Label htmlFor="PPsize">PP</Label>
          </div>
          <div>
            <InputCheckBox id="Psize" type="checkbox" onChange={(event) => setP(event.target.checked)} />
            <Label htmlFor="Psize">P</Label>
          </div>
          <div>
            <InputCheckBox id="Msize" type="checkbox" onChange={(event) => setM(event.target.checked)} />
            <Label htmlFor="Msize">PP</Label>
          </div>
          <div>
            <InputCheckBox id="Gsize" type="checkbox" onChange={(event) => setG(event.target.checked)} />
            <Label htmlFor="Gsize">PP</Label>
          </div>
          <div>
            <InputCheckBox id="GGsize" type="checkbox" onChange={(event) => setGG(event.target.checked)} />
            <Label htmlFor="GGsize">GG</Label>
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