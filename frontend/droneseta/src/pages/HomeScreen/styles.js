import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffdfc;
  height: 100vh;
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
