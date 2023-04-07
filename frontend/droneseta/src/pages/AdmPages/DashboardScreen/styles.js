import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 94vh;
`;

export const LeftContent = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 2;
`;

export const ContainerImagem = styled.img`
  object-fit: cover;
  height: 20vh;
`;

export const RightContent = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Spacer = styled.div`
  width: 5vh;
`;

export const Logo = styled.img`
  width: 9.88vh;
  height: 5vh;
`;

export const ItemButton = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 2vh;
  font-weight: bold;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

export const ClickMenu = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
`;
