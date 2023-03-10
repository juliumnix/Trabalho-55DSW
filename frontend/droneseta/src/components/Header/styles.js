import styled from "styled-components";

export const Container = styled.header`
  background-color: #ffffff;
  height: 6vh;
  box-shadow: 18px 18px 30px rgba(209, 217, 230, 0.5);
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 9.88vh;
  height: 5vh;
`;

export const Spacer = styled.div`
  width: 5vh;
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
