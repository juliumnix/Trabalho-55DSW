import React, { useEffect, useState } from "react";

import {
  ClickMenu,
  Container,
  ContainerImagem,
  ItemButton,
  LeftContent,
  Logo,
  RightContent,
  Spacer,
} from "./styles";
import Header from "../../../components/Header";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import DashboardItem from "../../../components/DashboardItem";
import ProductService from "../../../services/ProductService";
import Button from "../../../components/Button";

function DashboardScreen() {
  const navigate = useNavigate();
  const productService = new ProductService();
  const [produtos, setProdutos] = useState([]);
  let tamanho = 25;

  useEffect(() => {
    getProdutos();
  }, []);

  async function getProdutos() {
    const { data } = await productService.resgataProdutosMaisVendidos();
    setProdutos(data);
  }

  function logout() {
    localStorage.clear();
    navigate("/admin");
  }

  function tamanhoFunction() {
    const tamanhoRetorno = tamanho + `vh`;
    tamanho = tamanho - 5;
    return tamanhoRetorno;
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
        <LeftContent>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            {produtos.map((item) => (
              <DashboardItem
                height={tamanhoFunction()}
                image={item.urlImagem}
                title={item.descricao}
              />
            ))}
          </div>
        </LeftContent>
        <RightContent>
          <Button
            title={"Gerenciar administradores"}
            onClick={() => {
              navigate("/administrators");
            }}
          />
          <div style={{ height: "1vh" }} />
          <Button
            title={"Gerenciar clientes"}
            onClick={() => {
              navigate("/clients");
            }}
          />
          <div style={{ height: "1vh" }} />
          <Button
            title={"Gerenciar Entregas"}
            onClick={() => {
              navigate("/delivery");
            }}
          />
          <div style={{ height: "1vh" }} />
          <Button
            title={"Cadastrar produtos"}
            onClick={() => {
              navigate("/register-admin");
            }}
          />
          <div style={{ height: "1vh" }} />
          <Button
            title={"Cadastrar tamanho"}
            onClick={() => {
              navigate("/size-admin");
            }}
          />
        </RightContent>
      </Container>
    </>
  );
}

export default DashboardScreen;
