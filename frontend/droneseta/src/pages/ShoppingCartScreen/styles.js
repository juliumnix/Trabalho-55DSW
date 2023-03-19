import styled from "styled-components";

export const Container = styled.div`
  height: 94vh;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
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

export const ContainerBottom = styled.div`
  height: 24vh;
  margin-left: 22vh;
  margin-right: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BottomItems = styled.div`
  background: white;
  height: 15vh;
  min-width: 19vw;
  display: flex;
  padding-top: 3vh;
  padding-left: 1vw;
  padding-right: 1vw;
  flex-direction: column;
  border: 0.1vh solid #e3e3e3;
  box-shadow: 0px 0px 2.6vh #c6c6c6;
  margin: 0;
`;

export const TitleBottom = styled.p`
  font-weight: bold;
  font-size: 2.6vh;
  margin-bottom: 1.3vh;
`;

export const SubtitleBottom = styled.p`
  font-weight: normal;
  font-size: 2vh;
  color: #757575;
`;

export const ContainerPay = styled.div`
  align-items: flex-start;
`;

export const ExternalContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  flex-direction: column;
  height: 18vh;
`;

export const InternalContainer = styled.div`
  display: flex;
  flex: 1;
  width: 30vw;
  justify-content: space-between;
  padding-bottom: 2vh;
`;

export const TextPay = styled.p`
  font-weight: bold;
  font-size: 5vh;
`;
