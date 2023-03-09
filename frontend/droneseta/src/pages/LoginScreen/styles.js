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

export const LoginDataWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 94vh;
  width: 55vh;
`;

export const LoginImage = styled.img`
  position: absolute;
  z-index: 0;
  height: 94vh;
  width: 55vh;
`;

export const LoginData = styled.div`
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

export const LoginDataContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
  width: 45vh;
  padding: 2vh 0;
  box-sizing: border-box;
`;

export const LoginDataContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export const SignUpRedirect = styled.a`
  font-size: 12px;
  font-family: "Inter", sans-serif;
  color: #8d8d8d;
  margin-top: 0.5vh;
`;
