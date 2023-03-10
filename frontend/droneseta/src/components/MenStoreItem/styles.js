import styled from "styled-components";

export const Container = styled.div`
  height: 40vh;
  width: 15vw;
  margin: 2vw;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 0.3vh solid #e3e3e3;
  box-shadow: 0 0 2vh #c6c6c6;
`;

export const ContainerImagem = styled.img`
  object-fit: cover;
  width: 100%;
  height: 80%;
`;

export const ContainerInfos = styled.div`
  margin: 3%;
`;

export const Title = styled.p`
  font-size: 1vw;
  font-weight: bold;
`;

export const Price = styled.p`
  font-size: 1.5vh;
`;
