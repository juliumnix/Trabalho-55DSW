import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 20vh;
  border: 0.1vh solid #e3e3e3;
  box-shadow: 0px 0px 2.6vh #c6c6c6;
`;

export const ContainerImage = styled.img`
  width: 20vh;
  height: 20vh;
`;

export const PrimaryInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1vw;
  padding-top: 1vh;
`;

export const QuantityMedidor = styled.div`
  padding-left: 1vw;
  padding-bottom: 1vh;
  display: flex;
  flex-direction: row;
`;

export const ContainerLeft = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

export const ContainerRight = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  align-items: flex-end;
  padding-right: 1vh;
  padding-top: 1vh;
  padding-bottom: 1vh;
  justify-content: space-between;
`;

export const Delete = styled.button`
  color: white;
  font-weight: bold;
  font-size: 2.2vh;
  background-color: #c55757;
  border: none;
  cursor: pointer;
  height: 5vh;
  width: 5vh;
  padding: 0;
  border-radius: 100%;
`;

export const Price = styled.p`
  font-size: 2vh;
  font-weight: bold;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 2.6vh;
  padding-bottom: 1vh;
`;

export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 2vh;
`;

export const QuantityText = styled.p`
  font-weight: bold;
  font-size: 2vh;
  padding-right: 0.5vw;
`;

export const QuantityIndicator = styled.p`
  font-weight: bold;
  font-size: 2vh;
  padding-left: 1vh;
  padding-right: 1vh;
  background-color: #f0f0f0;
`;

export const QuantityButton = styled.button`
  font-weight: bold;
  font-size: 2vh;
  padding: 0 0.5vw;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;
