import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex:1;
  height: 94vh;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  height: 70vh;
  width: 70vw;
  background-color: #5e92a2;
  box-shadow:
        3px 3px 6px 3px rgba(0, 0, 0, 0.1),
        -3px -3px 3px 3px rgba(247, 251, 255, 0.5),
        3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
        -3px -3px 7px 2px rgba(247, 251, 255, 0) inset;
`;

export const CardLeft = styled.div`
    float: left;
  height: 70vh;
  width: 45vw;
  background-color: white;
  opacity: 0.5;
`;

export const CardRight = styled.div`
  float: left;
  height: 70vh;
  width: 25vw;
`;

export const DivButton = styled.div`
    height: 20vh;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const DivInfos = styled.div`
    height: 50vh;
    width: 25vw;
`

export const CollectionButton = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-size: 1em;
  font-weight: bold;
  color: black;
  height: 8vh;
  width: 20vw;
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

export const Title = styled.label`
  font-size: 1em;
  font-weight: bold;
  color: black;
`