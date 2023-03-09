import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffdfc;
  height: 100vh;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
`;

export const ContainerProdutos = styled.div`
  height: 82vh;
  margin-left: 9.5vw;
  margin-right: 9.5vw;
  display: flex;
  flex-direction: column;
  flex: 1;
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

export const ClickMenu = styled.button`
  border: none;
  background: none;
`;

export const ContainerSidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 260px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 18px 18px 30px rgba(209, 217, 230, 0.5);
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 94vh;
  width: 100vw;
`;

export const ImagemProvisoriaRemover = styled.div`
  position: absolute;
  align-self: flex-end;
  height: 85vh;
  width: 70vw;
  right: 2.5vw;
  background-color: #f9f5f4;
`;

export const InfoWrapper = styled.div`
  position: absolute;
  left: 2.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 85vh;
  width: 35vw;
`;

export const ContainerTitleBar = styled.div`
  display: flex;
  align-items: center;
  height: 30vh;
  width: 35vw;
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 35vw;
  background-color: #5e92a2;
`;

export const Title = styled.p`
  font-size: 5em;
  line-height: 85%;
  text-shadow: 1vh 1vh 8vh rgba(0, 0, 0, 0.5);
`;

export const Paragraph = styled.div`
  font-size: 1em;
  height: 25vh;
  width: 28vw;
`;

export const CollectionButton = styled.button`
  cursor: pointer;
  font-size: 1em;
  color: black;
  margin-bottom: 10vh;
  height: 10vh;
  width: 30vw;
  border: 0px;
  border-radius: 0.5vw;
  box-shadow: 1vh 1vh 8vh rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0);
  :hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: 0.2s;
  }
  :active {
    background-color: rgba(255, 255, 255, 0.7);
    color: #676767;
    transition: 0.1s;
  }
`;

export const CollectionButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CollectionButtonIconWrapper = styled.div`
  position: absolute;
  right: 4vw;
`;
