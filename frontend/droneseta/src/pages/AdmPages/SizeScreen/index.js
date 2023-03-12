import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { ClickMenu, ItemButton, Logo } from "../../../components/Header/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import {
  Container,
  ContainerLeft,
  ContainerRight,
  ItensSizes,
  Spacer,
  TitleContent,
  TitleSubcontent,
} from "./styles";
import { useNavigate } from "react-router-dom";
import SizesService from "../../../services/SizesService";

function SizeScreen() {
  const [sigla, setSigla] = useState("");
  const [siglas, setSiglas] = useState([]);
  const navigate = useNavigate();
  const sizesService = new SizesService();

  useEffect(() => {
    getSizes();
  }, []);

  async function getSizes() {
    const { data } = await sizesService.getSizes();
    console.log(data);
    setSiglas(data);
  }

  function logout() {
    localStorage.clear();
    navigate("/admin");
  }

  async function setSiglaInDb() {
    try {
      if (sigla === "") {
        return;
      }
      await sizesService.setSize(sigla);
      await getSizes();
    } catch (error) {
      console.log(error);
    }
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
      <Container>
        <ContainerLeft>
          <div>
            <Input
              type="text"
              placeholder="Tamanho"
              name="price"
              value={sigla}
              onChange={(event) => setSigla(event.target.value)}
            />
          </div>
          <div>
            <Button type="submit" title={"CADASTRAR"} onClick={setSiglaInDb} />
          </div>
        </ContainerLeft>
        <ContainerRight>
          <TitleContent>Tamanhos</TitleContent>
          {siglas.map((item, index) => (
            <ItensSizes> {item.sigla}</ItensSizes>
          ))}
        </ContainerRight>
      </Container>
    </>
  );
}

export default SizeScreen;
