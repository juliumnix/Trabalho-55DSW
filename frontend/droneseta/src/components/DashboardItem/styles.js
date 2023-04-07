import styled from "styled-components";

export const Container = styled.div`
  margin: 2vh;
  border: 0.1vh solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
`;

export const ContainerImagem = styled.img`
  object-fit: cover;
  height: 20vh;
`;

export const InfoContainer = styled.div`
  justify-content: center;
  align-items: center;
  border: 0.1vh solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  display: flex;
  flex: 1;
`;

export const TitleContainer = styled.p`
  padding: 2vw;
  font-size: 2vh;
`;
