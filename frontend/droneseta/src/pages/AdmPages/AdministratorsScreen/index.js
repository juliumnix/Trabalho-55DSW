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

function AdministratorsScreen() {
  const navigate = useNavigate();
  const [administrators, setAdministrators] = useState([]);
  const adminService = new AdminService();

  useEffect(() => {
    getAdministrators();
  }, []);

  async function getAdministrators() {
    const { data } = await adminService.getAdministrators();
    setAdministrators(data);
  }

  async function deleteClient(id) {
    await adminService.deleteAdministrator(id);
    await getAdministrators();
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
          {administrators.map((item) => (
            <ContainerItens>
              <TitleClient>{item.nome}</TitleClient>
              <DeleteClient
                onClick={() => {
                  deleteClient(item.id);
                }}
              >
                Deletar
              </DeleteClient>
            </ContainerItens>
          ))}
        </ContainerList>
      </Container>
    </>
  );
}

export default AdministratorsScreen;
