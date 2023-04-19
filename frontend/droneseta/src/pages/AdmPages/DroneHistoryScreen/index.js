import { useState, React, useEffect } from "react";
import { Logo } from "../../../components/Header/styles";
import Header from "../../../components/Header";
import { ClickMenu } from "../../../components/Header/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import DroneService from "../../../services/DroneService";
import {
  Container,
  TableData,
  TableDataEntrega,
  TableHeader,
  TableProduct,
} from "./styles";
import TopHeader from "../../../components/TopHeader";

export default function DroneHistoryScreen() {
  const navigate = useNavigate();
  const droneService = new DroneService();
  const [droneHistory, setDroneHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  function logout() {
    localStorage.clear();
    navigate("/admin");
  }

  async function getHistory() {
    const { data } = await droneService.getDroneHistory();
    setDroneHistory(data);
  }

  function vendas(item) {
    const lista = [];
    item.vendas.forEach((element) => {
      lista.push(<TableData>{element.valor}</TableData>);
      lista.push(<TableData>{stringNomeProd(element.produtos)}</TableData>);
      lista.push(
        <TableData>{stringQuantidadeProd(element.produtos)}</TableData>
      );
      lista.push(<TableData>{stringTamanhoProd(element.produtos)}</TableData>);
      lista.push(
        <TableDataEntrega
          style={{ color: converterEntregue(element.entregue) }}
        >
          {element.entregue ? "Entregue" : "Não Entregue"}
        </TableDataEntrega>
      );
    });
    return lista;
  }

  function converterEntregue(entregue) {
    return entregue ? "#0AC700" : "#C73600";
  }

  function stringNomeProd(prod) {
    const prods = [];
    prod.forEach((produtos) => {
      prods.push(<p>{produtos.produto.descricao}</p>);
    });
    return prods;
  }

  function stringQuantidadeProd(prod) {
    const prods = [];
    prod.forEach((produtos) => {
      prods.push(<p>{produtos.quantidade}</p>);
    });
    return prods;
  }

  function stringTamanhoProd(prod) {
    const prods = [];
    prod.forEach((produtos) => {
      prods.push(<p>{produtos.tamanho.sigla}</p>);
    });
    return prods;
  }

  return (
    <>
      <Header
        leftChildren={
          <>
            <Logo src={require("../../../assets/logo.png")} />
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
      <div>
        <TopHeader title={"HISTÓRICO DOS DRONES"} />
      </div>
      <Container>
        <TableProduct>
          <thead>
            <tr>
              <TableHeader>TOTAL DE ITENS</TableHeader>
              <TableHeader>PREÇO TOTAL</TableHeader>
              <TableHeader>PRODUTO</TableHeader>
              <TableHeader>QUANTIDADE</TableHeader>
              <TableHeader>TAMANHO</TableHeader>
              <TableHeader>STATUS</TableHeader>
            </tr>
          </thead>
          <tbody>
            {droneHistory.map((item, index) => (
              <tr key={index}>
                <TableData>{item.quantidadeEntregue}</TableData>
                {vendas(item)}
              </tr>
            ))}
          </tbody>
        </TableProduct>
      </Container>
    </>
  );
}
