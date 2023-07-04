import styled from "styled-components";
import background from "../assets/background.png"


export const DivPrincipal = styled.div`
background: url("${background}");
background-size: cover;
display: flex;
flex-direction:column;
align-items: center;
gap:35px;
height:100%;
min-height: 100vh;
`;

export const Container = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
width: 414px;
height: 645px;
display:flex;
flex-direction:column;
align-items: center;
gap: 20px;
padding:20px;
height: 100vh;
`;
export const Imagem = styled.img`

margin-top: 35px;
margin-bottom:20px;`;
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

`;
