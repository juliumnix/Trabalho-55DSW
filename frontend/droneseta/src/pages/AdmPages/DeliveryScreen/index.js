import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { ClickMenu, ItemButton, Logo } from "../../../components/Header/styles";
import LogoutIcon from "@mui/icons-material/Logout";

import {
  Container,
  Spacer,
  ContainerList,
  InformationStatusDelivered,
  InformationStatusNotDelivered,
  ContainerItens,
  TitleDelivery,
} from "./styles";
import { useNavigate } from "react-router-dom";
import AdminService from "../../../services/AdminService";

function DeliveryScreen() {
  const navigate = useNavigate();
  const adminService = new AdminService();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getDeliveryItens();
  }, []);

  async function getDeliveryItens() {
    const { data } = await adminService.getDelivery();
    setRequests(data);
  }

  function logout() {
    localStorage.clear();
    navigate("/admin");
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
        <ContainerList>
          {requests.map((item) => (
            <ContainerItens>
              <TitleDelivery>Pedido n° {item.id}</TitleDelivery>
              {item.entregue ? (
                <InformationStatusDelivered>
                  Pedido Entregue
                </InformationStatusDelivered>
              ) : (
                <InformationStatusNotDelivered>
                  Pedido Pendente
                </InformationStatusNotDelivered>
              )}
            </ContainerItens>
          ))}
        </ContainerList>
      </Container>
    </>
  );
}

export default DeliveryScreen;
