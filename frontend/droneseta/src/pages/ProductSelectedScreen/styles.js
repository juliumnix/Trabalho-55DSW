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
    height: 35vh;
    width: 21.5vw;
    padding: 1.5em;
`

export const DivSizes = styled.div`
    height: 4vh;
    width: 21.5vw;
    padding: 1.5em 1.5em 0em 1.5em;
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
  width: 22vw;
  padding: 0 10%;
  border: 0px;
  border-radius: 0.5vw;
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.1),
        -3px -3px 3px 3px rgba(109, 170, 189, 0.5),
        3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
        -3px -3px 7px 2px rgba(109, 170, 189, 0) inset;
  background-color: rgba(255, 255, 255, 0);
  :active {
    box-shadow:
                    3px 3px 6px 3px rgba(0, 0, 0, 0),
                    -3px -3px 3px 3px rgba(109, 170, 189, 0),
                    3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
                    -3px -3px 7px 2px rgba(109, 170, 189, 0.7) inset;
    color: #676767;
    transition: 0.1s;
  }
  cursor: pointer;
`;

export const Title = styled.label`
  font-size: 1.7em;
  font-weight: bold;
  color: black;
`

export const Divider = styled.div`
  width: 20vw;
  margin: 0.5em 0em;
  border: 1.5px solid black;
`


export const Price = styled.label`
  font-size: 1em;
  font-weight: light;
`

export const ContainerImagem = styled.img`
  width: 100%;
  height: 100%;
`

export const Label = styled.label`
    margin-right: 15px;
    align-items: center;
    box-shadow:
        3px 3px 6px 3px rgba(0, 0, 0, 0.1),
        -3px -3px 3px 3px rgba(109, 170, 189, 0.5),
        3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
        -3px -3px 7px 2px rgba(109, 170, 189, 0) inset;
    cursor: pointer;
    display: flex;
    float: left;
    font-size: 1em;
    font-weight: bold;
    height: 2.5em;
    justify-content: center;
    width: 2.5em;
    border-radius: 0.5vw;
`

export const InputCheckBox = styled.input`
    display: none;
        &:checked {
            & + ${Label} {
                border: 3px solid lighten(hsl(210, 50%, 90%), 2);
                box-shadow:
                    3px 3px 6px 3px rgba(0, 0, 0, 0),
                    -3px -3px 3px 3px rgba(109, 170, 189, 0),
                    3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
                    -3px -3px 7px 2px rgba(109, 170, 189, 0.7) inset;
                color: black;
                -webkit-text-stroke: 1px transparent;

            }
        }
`