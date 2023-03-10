import styled from 'styled-components'
import Background from '../../assets/Fundo2.png'
import { Link } from 'react-router-dom';

export const Container = styled.div`
     background: url("${Background}");
     background-size: cover;

     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 40px;
     height: 100vh;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 80px;
`;


export const Image = styled.img`
   margin-top: 30px;
`

export const ContainerItens = styled.div`
   background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
   );
   backdrop-filter: blur(45px);
   border-radius: 61px 61px 0px 0px;
   padding: 50px 36px;
   display:flex;
   flex-direction: column;
   height:100vh;
`;


export const Button = styled(Link)`
    width: 369px;
    height: 74px;  
    background: transparent;
    border-radius: 14px; 
    border: 1px solid #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-left: 25px;
    margin-top: 120px;
   
    img {
        transform: rotateY(180deg);
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`
export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 369px;
    height: 58px;
    border: none;
    outline: none;
    margin-top: 20px;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #ffffff;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;

    }

`