import styled from "styled-components";
import background from "../assets/Background1.svg"
import { Link } from 'react-router-dom'


export const DivPrincipal = styled.div`
background: url("${background}");
background-size: cover;
display: flex;
flex-direction:column;
align-items: center;
gap:35px;
height:100%;
`;
;
export const Imagem = styled.img`
margin-top: 35px;
margin-bottom:20px;

`;
export const Container = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
width: 414px;
height: 645px;
display:flex;
flex-direction:column;
gap: 20px;
padding:20px;
`;

export const InputLabel = styled.p`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;
margin-left: 10px;
margin-bottom: -7px;

`;
export const Input = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border:none;
width: 100%;
height: 58px;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
padding:15px;
`;

export const ButtonVewUsers = styled(Link)`
display: flex;
justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  width: 60%;
  border-radius: 10px;
  margin-left: 20%;
  cursor: pointer;
`
export const Lista = styled.li`
display:flex;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border:none;
width: 100%;
height: 58px;
justify-content: space-between;
align-items: center;
padding: 25px;
gap: 35px;
margin-top: 40px;

p{
    font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;}





`
