import styled from 'styled-components';

export const Container = styled.div`
  float: left;
  height: 100vh;
`;

export const ContainerLogin = styled.div`
padding-top: 450px;
padding-left: 200px;
`;

export const Label = styled.label`
font-family: 'Inter', sans-serif;
font-size: 16px;
height: 10vh;
font-weight: bold;
border: none;
background: none;
`;

export const Input = styled.input`
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
  color: #fff;
`;

export const Button = styled.button`
  padding: 1em 2.5em;
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  border-radius: 0.5em;
  background: #000000;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5,
              -6px -6px 12px #ffffff;
`

export const ImageLogin = styled.div`
float: right;
width: 40vw;
height: 100vh;
text-align: center;`;
