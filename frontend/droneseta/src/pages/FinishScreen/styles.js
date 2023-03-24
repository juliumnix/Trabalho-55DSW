import styled from "styled-components";

export const ButtonNoShadow = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    font-size: 1.9vh;
    transition: 0.2s;
  }
`;
