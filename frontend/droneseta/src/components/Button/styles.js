import styled from "styled-components";

export const Container = styled.button`
  height: 6vh;
  width: 41vh;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 2vh;
  color: #ffffff;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  border-radius: 2vh;
  background: #000000;
  border: 0.1vh solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  :hover {
    font-size: 1.9vh;
    transition: 0.2s;
  }
`;
