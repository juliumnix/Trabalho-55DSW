import styled from "styled-components";

export const Container = styled.div`
  height: 94vh;
  display: flex;
  flex-direction: row;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
`;

export const TitleContent = styled.div`
  padding: 1vw;
  height: 5vh;
  font-size: 5vh;
  font-weight: bold;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Spacer = styled.div`
  width: 5vh;
`;

export const ItensSizes = styled.div`
  border: 1px solid #e8e8e8;
  padding: 1vw;
`;
