import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFFDFC;
  height: 100vh;
`;

export const ItemButton = styled.button`
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    height: 10vh;
    font-weight: bold;
    border: none;
    background: none;
`;

export const Spacer = styled.div`
    width: 5vh;
`;

export const Logo = styled.img`
    width: 83px;
    height: 42px;
    padding-left: 20px;

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
    background-color: #FFF;
    box-shadow: 18px 18px 30px rgba(209, 217, 230, 0.5);
    justify-content: center;
    align-items: center;
`;