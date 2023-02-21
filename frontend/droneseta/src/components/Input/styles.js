import styled from 'styled-components';

export const Container = styled.input`
  margin: 30px;
  background: none;
  border: none;
  outline: none;
  max-width: 190px;
  padding: 10px 20px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  border-radius: 9999px;
  box-shadow: inset 5px 5px 10px rgb(243, 243, 243);
  color: #8d8d8d;
  transition: 0.5s;
  :focus{
    transition: 0.5s;
    color: black;
  }

`;