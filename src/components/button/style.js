import styled from "styled-components"

export const Button = styled.button`
background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
border: ${props => props.isBack ? '1px, solid, #ffffff' : 'none'};
border-radius: 14px;
width: 100%;
height: 74px;
font-size: 17px;
line-height: 28px;
align-items: center;
color: #FFFFFF;
margin-top:85px;
display:flex;
align-items:center;
justify-content: center;
gap:15px;
cursor: pointer;

&:hover{
    opacity:0.8;
    }
    &:active{
        background: #00ff00
    };
img{transform: ${props => props.isBack ? 'rotateY(180deg)': '' } }
`