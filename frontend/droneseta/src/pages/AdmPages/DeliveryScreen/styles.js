import styled from "styled-components";

export const Container = styled.div`
  height: 94vh;
`;
export const Spacer = styled.div`
  width: 5vh;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex: 1;
  background-color: #d9d9d9;
  justify-content: space-around;
  align-items: center;
  padding: 1vw;
  margin: 1vw;
  border-radius: 0.5vw;
`;

export const TitleDelivery = styled.p`
  font-size: 5vh;
  color: white;
  font-weight: bold;
`;

export const InformationStatusDelivered = styled.p`
  border: 0.5vh solid green;
  padding: 2vh;
  border-radius: 0.5vw;
  font-size: 1vw;
  color: green;
  min-width: 8vw;
`;

export const InformationStatusNotDelivered = styled.p`
  border: 0.5vh solid red;
  padding: 2vh;
  border-radius: 0.5vw;
  font-size: 1vw;
  color: red;
  min-width: 8vw;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  height: 94vh;
  margin-left: 20vh;
  margin-right: 20vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5vw;
    border-radius: 20px;
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
  }
  &::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 15px;
    height: 0.5vh;
  }
`;
