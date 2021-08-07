import styled from "styled-components";


export const ContainerPostComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 90vh;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  gap: 40px;
`
export const ContainerComment = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 20vh;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: center;
  background: linear-gradient(to right, #6600cc 0%, #009999 89%);
  gap: 30px;
  border-radius: 10px;
  border: 2px solid #6600cc;

`

export const Text = styled.div`
 color: white;

`;
export const Date = styled.div`
   color: white;

`;

export const ButtonsReact = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  background-color: white;
  gap: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #6600cc;
  position: relative;
  top: 25px;
  border: 2px solid #6600cc;

`;


export const ButtonUp = styled.div`
  button {
    width: 2vw;
    height: 5vh;
    border: none;
    background-color: white;
    border-radius: 20px;
    margin-left: 10px;
    color: #6600cc;
    cursor: pointer;
  }
`;

export const ButtonDown = styled.div`
  button {
    width: 2vw;
    height: 5vh;
    border: none;
    background-color: white;
    border-radius: 20px;
    color: #009999;
    cursor: pointer;
  }
`;

export const Vote = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  align-items: center;
  background-color: white;
  margin-left: 20px;
  position: relative;
  right: 15px;
`;




