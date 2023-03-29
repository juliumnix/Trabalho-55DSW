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
