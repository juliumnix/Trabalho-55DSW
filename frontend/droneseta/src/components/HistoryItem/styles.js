import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.1vh solid #e3e3e3;
  box-shadow: 0px 0px 2.6vh #c6c6c6;
`;

export const Content = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

export const ContainerImage = styled.img`
  width: 20vh;
  height: 20vh;
`;

export const TextInformaticon = styled.p`
  font-size: 1.5vw;
  font-weight: bold;
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10vw;
`;

export const DeliveredContainer = styled.p`
  border: 0.1vh solid #e3e3e3;
  padding: 1vw;
  font-size: 2vw;
`;
