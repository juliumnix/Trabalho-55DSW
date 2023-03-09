import styled from "styled-components";

export const Container = styled.input`
  margin: 15px 0px;
  background: none;
  border: none;
  outline: none;
  width: 270px;
  padding: 10px 20px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  border-radius: 9999px;
  box-shadow: inset 0 0 0.5vh 0.5vh rgb(204, 204, 204);
  color: #8d8d8d;
  transition: 0.5s;
  :focus {
    transition: 0.5s;
    color: black;
  }
  :disabled {
    color: #e8e8e8;
  }
  :disabled::-webkit-input-placeholder {
    color: #e8e8e8;
  }
`;
