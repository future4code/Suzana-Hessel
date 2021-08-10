import styled from "styled-components";

export const GameContainer = styled.div`
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  align-content: center;

  
`;

export const ButtonGamePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  position: relative;
 bottom: 25px;

  button {
    width: 12vw;
    height: 8vh;
    color: white;
    margin: 5px;
    box-shadow: 0 0 30px black;
    &:hover {
      box-shadow: 0 0 30px #aaaaaa;
      transform: scale(1.05);
      border: none;
    }
  }
`;

export const ButtonExit = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;
 top: 10px;
 margin-left: 20px;

 button {
    width: 10vw;
    height: 5vh;
    color: white;
 
    box-shadow: 0 0 30px black;
    &:hover {
      box-shadow: 0 0 30px #aaaaaa;
      transform: scale(1.05);
      border: none;
    }
  }

`;
