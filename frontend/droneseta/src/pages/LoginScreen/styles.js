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

export const ImageLogin = styled.div`
background: url(${require("../../assets/background-login.png")});
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


export const SizeButton = styled.input`
  position: absolute;
  opacity: 1;
  -webkit-appearance: none;
  cursor: pointer;
  height: 50px;
  width: 50px;
  box-shadow: -10px -10px 15px rgba(255,255,255,0.5),
  10px 10px 15px rgba(0,0,70,0.12);
  border-radius: 50%;
  border: 8px solid #ececec;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s;

 :after {
  transition: .5s;
  font-family: monospace;
  content: '';
  color: #7a7a7a;
  font-size: 25px;
  left: 0.45em;
  top: 0.25em;
  width: 0.25em;
  height: 0.5em;
  border: solid #7a7a7a;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}

:checked {
  box-shadow: -10px -10px 15px rgba(255,255,255,0.5),
  10px 10px 15px rgba(70,70,70,0.12),
  inset -10px -10px 15px rgba(255,255,255,0.5),
  inset 10px 10px 15px rgba(70,70,70,0.12);
  transition: .5s;
}

.container input:checked::after {
  transition: .5s;
  border: solid #15e38a;
  border-width: 0 0.15em 0.15em 0;
  transform: rotate(45deg);
}
`
