import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import { ClickMenu, ItemButton, Logo } from "../../../components/Header/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Container,
  Spacer,
  ContainerList,
  ContainerItens,
  TitleClient,
  DeleteClient,
} from "./styles";
import { useNavigate } from "react-router-dom";
import AdminService from "../../../services/AdminService";

function ClientsScreen() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const adminService = new AdminService();

  useEffect(() => {
    getClients();
  }, []);

  async function getClients() {
    const { data } = await adminService.getClients();
    setClients(data);
  }

  async function deleteClient(id) {
    await adminService.deleteClient(id);
    await getClients();
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
          {clients.map((item) => (
            <ContainerItens>
              <TitleClient>{item.nome}</TitleClient>
              <DeleteClient
                onClick={() => {
                  deleteClient(item.id);
                }}
              >
                Deletar cliente
              </DeleteClient>
            </ContainerItens>
          ))}
        </ContainerList>
      </Container>
    </>
  );
}

export default ClientsScreen;
