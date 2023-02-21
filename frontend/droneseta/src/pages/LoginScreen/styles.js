import styled from 'styled-components';

export const Container = styled.div`
  float: left;
  height: 100vh;
`;

export const ContainerLogin = styled.div`
  padding-left: 5vw; 
`;

export const Label = styled.label`
font-family: 'Inter', sans-serif;
font-size: 16px;
height: 10vh;
font-weight: bold;
border: none;
background: none;
`;

export const Button = styled.button`
  padding: 1em 2.5em;
  cursor: pointer;
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
  font-family: 'Inter', sans-serif;
  border-radius: 0.5em;
  background: #000000;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5,
              -6px -6px 12px #ffffff;
  transition: 0.2s;
  :hover{
    padding: 1em 3em;
    transition: 0.2s;
  }
`

export const ImageLogin = styled.div`
background: url(${require("../../assets/login_background.png")});
background-repeat: no-repeat;
background-position: right;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
float: right;
width: 35vw;
height: 100vh;
text-align: center;`;
