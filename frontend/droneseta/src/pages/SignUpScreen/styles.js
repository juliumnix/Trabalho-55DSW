import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffdfc;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 94vh;
  width: 100vw;
`;

export const Title = styled.h2`
  font-family: "Inter", sans-serif;
  margin-bottom: 2vh;
`;

export const SignUpDataWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 94vh;
  width: 55vh;
`;

export const SignUpImage = styled.img`
  position: absolute;
  z-index: 0;
  height: 94vh;
  width: 55vh;
`;

export const SignUpData = styled.div`
  position: absolute;
  z-index: 1;
  height: 94vh;
  width: 55vh;
  padding-top: 5vh;
  padding-left: 4vh;
  padding-right: 6vh;
  padding-bottom: 9vh;
  box-sizing: border-box;
`;

export const SignUpDataContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  width: 45vh;
  padding: 2vh 0;
  box-sizing: border-box;
`;

export const SignUpDataContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  align-self: flex-start;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  color: #8d8d8d;
  margin-bottom: 1.5vh;
`;

export const Check = styled.input`
  height: 3vh;
  width: 3vh;
  margin-right: 1vh;
  background-color: white;
  border-radius: 100%;
  box-shadow: inset 0 0 0.5vh 0.5vh rgb(204, 204, 204);
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  :checked {
    height: 2vh;
    width: 2vh;
    margin: 0.5vh 1.5vh 0.5vh 0.5vh;
    box-shadow: 0 0 0.5vh 0.5vh rgb(204, 204, 204);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export const LoginRedirect = styled.a`
  font-size: 12px;
  font-family: "Inter", sans-serif;
  color: #8d8d8d;
  margin-top: 0.5vh;
`;
