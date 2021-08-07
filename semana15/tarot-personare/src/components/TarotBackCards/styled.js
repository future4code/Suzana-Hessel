import styled from "styled-components"

export const ContainerBackCards = styled.div` 
width: 100%;
height: 625px;

`


export const BackCards = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(6, 1fr);
justify-content: center;
align-items: center;
align-content: center;
justify-items: center;
font-size: 12px;
background-color: blueviolet;
position: relative;
top: 50px;

`


export const BoxChosenCard = styled.div`
width: 100%;
height: 70vh;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
justify-items: center;
font-size: 12px;
`

export const Cards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
align-items: center;
justify-items: center;
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
display: flex;
font-size: 15px;
justify-content: center;
align-content: center;
align-items: center;
justify-items: center;

p{
    margin: 0%;
}
`

