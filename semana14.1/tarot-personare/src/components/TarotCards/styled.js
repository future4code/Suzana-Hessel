import styled from "styled-components"

export const FrontCards = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(6, 1fr);
justify-content: center;
align-items: center;
align-content: center;
justify-items: center;
background-color: blueviolet;
font-size: 12px;
margin-top: 50px;
`

export const Cards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
width: 12vw;
height: 45vh;
border-radius: 10px;
border: 2px solid white;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
background-color: white;
font-weight: bold;
cursor: pointer;
box-shadow: 0 0 30px black;
&:hover{
    box-shadow: 0 0 30px #aaaaaa;
    transform: scale(1.05);
    
}

img{
    width: 10vw;
    height: 40vh;
}
`

export const CardsName = styled.div`
font-size: 15px;

`



