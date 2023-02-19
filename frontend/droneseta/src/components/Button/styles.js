import styled from 'styled-components';

export const ContainerActive = styled.button`
    height: 5vh;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    border: none;
    font-weight: bold;
    border-radius: 1vh;
    padding: 10px;
    margin-bottom: 10px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  18px 18px 40px #adadad,
             -18px -18px 40px #ffffff;
   
`;

export const ContainerInactive = styled.button`
    height: 5vh;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    border: none;
    font-weight: bold;
    border-radius: 1vh;
    margin-bottom: 10px;
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    box-shadow:  18px 18px 40px #adadad,
             -18px -18px 40px #ffffff;
             :hover{
    background: #ffffff;
    padding: 10px;
    box-shadow:  18px 18px 40px #d9d9d9,
             -18px -18px 40px #ffffff;
   }
   
`;
