import styled from "styled-components";

export const Container = styled.div`
  background-color: #fffdfc;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 94vh;
  width: 100vw;
  box-sizing: border-box;
`;

export const ImagemProvisoriaRemover = styled.img`
  position: relative;
  z-index: 1;
  height: 90%;
  width: height;
  margin-left: -5vw;
  box-shadow: 0 0 5vh 0.5vh rgb(204, 204, 204);
`;

export const InfoWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90%;
  width: 35vw;
  margin-right: -5vw;
`;

export const ContainerTitleBar = styled.div`
  display: flex;
  align-items: center;
  height: 30%;
  width: 100%;
`;

export const TitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
  width: 100%;
  background-color: #5e92a2;
`;

export const Title = styled.p`
  font-size: 6vw;
  line-height: 85%;
  text-shadow: 1vh 1vh 8vh rgba(0, 0, 0, 0.5);
`;

export const Paragraph = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  font-size: 1.5vw;
  text-align: justify;
  height: 40%;
  width: 70%;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  padding-left: 10%;
  padding-right: 5%;
  box-sizing: border-box;
`;

export const ContainerCollectionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  width: 100%;
`;

export const CollectionButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  font-size: 1.2vw;
  color: black;
  height: 10vh;
  width: 30vw;
  padding: 0 10%;
  border: 0px;
  border-radius: 0.5vw;
  box-shadow: 1vh 1vh 8vh rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0);
  :active {
    background-color: rgba(255, 255, 255, 0.7);
    color: #676767;
    transition: 0.1s;
  }
  cursor: pointer;
`;
