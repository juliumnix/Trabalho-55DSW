import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex:1;
  height: 94vh;
  justify-content: center;
  align-items: center;
`;

export const Spacer = styled.div`
    width: 5vh;
`;

export const Logo = styled.img`
    width: 83px;
    height: 42px;
    padding-left: 20px;
`;

export const UploadImage = styled.img`
    width: 8vw;
`;

export const InputImage = styled.input`
    display: none;
`

export const ItemButton = styled.button`
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    height: 10vh;
    font-weight: bold;
    border: none;
    background: none;
`;

export const UploadLabel = styled.label`
    justify-content: center;
`

export const Label = styled.label`
    margin: 0px 20px;
    align-items: center;
    border: 3px solid transparent;
    box-shadow:
        3px 3px 6px 3px rgba(0, 0, 0, 0.1),
        -3px -3px 3px 3px rgba(247, 251, 255, 0.5),
        3px 3px 8px 2px rgba(0, 0, 0, 0) inset,
        -3px -3px 7px 2px rgba(247, 251, 255, 0) inset;
    cursor: pointer;
    display: flex;
    font-size: 1em;
    font-weight: bold;
    height: 2.5em;
    justify-content: center;
    position: relative;
    width: 2.5em;
    border-radius: 50%;
`
export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 19.5em;
`;

export const InputCheckBox = styled.input`
    display: none;
        &:checked {
            & + ${Label} {
                border: 3px solid lighten(hsl(210, 50%, 90%), 2);
                box-shadow:
                    3px 3px 6px 3px rgba(0, 0, 0, 0),
                    -3px -3px 3px 3px rgba(247, 251, 255, 0),
                    3px 3px 8px 2px rgba(0, 0, 0, 0.1) inset,
                    -3px -3px 7px 2px rgba(247, 251, 255, 0.7) inset;
                color: #7989A4;
                -webkit-text-stroke: 1px transparent;

            }
        }
`

export const ContainerCad = styled.div`
    height: 94vh;
    width: 30vw;
    background-position: left;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const ContainerLeft = styled.div`
    height: 94vh;
    width: 30vw;
    background-position: left;
    flex-direction: column;
    display: flex;
    float: left;
`
export const ContainerRight = styled.div`
    float: right;
    height: 94vh;
    width: 68vw;
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    text-align: center;
`
export const TableProduct = styled.table`
    font-size: 16px;
    height: 80vh;
    border-collapse: collapse;
    display: block;
    overflow-y: scroll;

`
export const TableHeader = styled.th`
    border: 1px solid black;
    max-height: 40vh;
    background-color: #5e92a2;
    color: white;
`
export const TableData = styled.th`
    border: 1px solid  #c6c6c6;
`
