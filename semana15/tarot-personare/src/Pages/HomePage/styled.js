import styled from "styled-components";
import tarot2 from "../../assets/tarot2.png";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${tarot2});
  background-repeat: no-repeat;
  background-size: 100vw;
  color: white;

  button {
    color: white;
    background-color: black;
    width: 15vw;
    height: 8vh;
    box-shadow: 0 0 10px #aaaaaa;
    margin-top: 30px;
    &:hover {
      box-shadow: 0 0 30px #aaaaaa;
      transform: scale(1.05);
      border: none;
    }
  }
`;

export const ButtonGoToGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 40vw;
  height: 60vh;
  background-color: blueviolet;
  filter: opacity(90%);
  border-radius: 20px;
  font-size: 17px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  
`;


// export const ContainerHome = styled.div`
//   @media (max-width: 700px) {
//     flex-direction: column;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100vh;
//     background-image: url(${tarot2});
//     background-repeat: no-repeat;
//     background-size: 100vw;
    
//   }

//   button {
//     color: white;
//     background-color: gray;
//     width: 20vw;
//     height: 10vh;
//   }
// `;

// export const ButtonGoToGame = styled.div`
// @media (max-width: 700px){
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: center;
//   width: 40vw;
//   height: 90vh;
//   background-color: black;
//   filter: opacity(90%);
//   border-radius: 20px;
// }
// `;