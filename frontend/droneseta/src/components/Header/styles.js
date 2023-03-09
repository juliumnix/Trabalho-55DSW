import styled from "styled-components";

export const Container = styled.header`
  background-color: #ffffff;
  height: 6vh;
  box-shadow: 18px 18px 30px rgba(209, 217, 230, 0.5);
  display: flex;
  justify-content: space-between;
`;

export const ContainerNoShadow = styled.header`
  background-color: #ffffff;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 9.88vh;
  height: 5vh;
  padding-left: 20px;
`;

export const ContainerLogo = styled.div`
  width: 50px;
  padding-right: 20px;
`;

export const Spacer = styled.div`
  width: 5vh;
`;

export const ItemButton = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  height: 10vh;
  font-weight: bold;
  border: none;
  background: none;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ClickMenu = styled.button`
  border: none;
  background: none;
`;

export const ContainerSidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 260px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 18px 18px 30px rgba(209, 217, 230, 0.5);
  justify-content: center;
  align-items: center;
`;
