import styled from "styled-components"

export const ContainerFeed = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 200vh;
align-content: center;
align-items: center;
gap: 20px;
` 

export const ContainerPost = styled.div`
display: flex;
flex-direction: column;
width: 30vw;
height: 15vh;
justify-content: center;
align-items: center;
background-color: white;
border: 2px solid black;
border-radius: 10px;

`
export const Title = styled.h4`
  font-size: 20px;
  color: rgb(35, 31, 36);
`;


export const ContainerPostUser = styled.div`
display: flex;
flex-direction:column;
width: 40vw;
height: 50vh;
align-items: center;
background-color: white;
border: 2px solid black;
border-radius: 10px;
`

export const ButtonPostar = styled.div`
display: flex;
flex-direction:column;
width: 30vw;
height: 5vh;
align-items: center;
position: relative;
top: 10px;
border-top: 2px solid black;

`
export const ContainerReactUser = styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
width: 40vw;
height: 4vh;
background-color: palegoldenrod;
border-top: 2px solid black;
border-bottom-right-radius: 10px ;
border-bottom-left-radius: 10px ;

`

export const Vote = styled.div`
display: flex;
flex-direction:row;
width: 20vw;
align-items: center;
background-color: orange;
margin-left: 20px;


`
export const Comment = styled.div`
display: flex;
flex-direction:row;
width: 20vw;
align-items: center;
justify-content: flex-end;
background-color: pink;
margin-right: 20px;


`

export const ButtonUser = styled.div`
display: flex;
flex-direction:row;
width: 20vw;
align-items: center;


`

export const Comments = styled.div`
display: flex;
flex-direction:row;
align-items: center;
width: 10vw;


`
