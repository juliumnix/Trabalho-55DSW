import styled from "styled-components";

export const TableProduct = styled.table`
    font-size: 16px;
    height: 80vh;
    border-collapse: collapse;
    display: inline-block;
    overflow-y: auto;
    overflow-x: auto;
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
  max-width: 90vw;
`

export const TableData = styled.th`
    border: 1px solid  #DDDEDE;
    font-weight: normal;
    padding: 0.1em 1em;
`
export const TableDataEntrega = styled.th`
    border: 1px solid  #DDDEDE;
    padding: 0.1em 1em;
`

export const TableHeader = styled.th`
    background-color: #F4F4F4;
    border: 1px solid #DDDEDE;
    padding: 0.5em 1em;
    color: black;
`

export const Container = styled.div`
    height: 80vh;
    width: 100vw;
    align-items: center;
    display: flex;
    justify-content: center;
`