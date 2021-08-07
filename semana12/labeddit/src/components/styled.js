import styled from "styled-components";

export const ContainerFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200vh;
  align-content: center;
  align-items: center;
  gap: 20px;
`;

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 15vh;
  justify-content: center;
  align-items: center;
  border: 2px solid  #6600cc;
  border-radius: 10px;
`;

export const Title = styled.h4`
  font-size: 20px;
  color: rgb(35, 31, 36);
  background-color: white;
`;

export const ContainerPostUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 50vh;
  align-items: center;
  background: linear-gradient(to right, #6600cc 0%, #009999 89%);
  border: 2px solid #6600cc;
  border-radius: 10px;
  color: #6600cc;

  p{
    color: white;
  }
  

  form {
    display: flex;
    flex-direction: row;
    width: 40vw;
    border-top: 2px solid #6600cc;
    justify-content: center;
    align-items: center;

    input{
      width: 30vw;
      position: relative;
      top: 5px;
      color: white;
    }

    button {
      width: 5vw;
      height: 4vh;
      position: relative;
      left: 25px;
      top: 10px;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      color: white;
      background-color: #009999;

      :hover {
        background-color: #6600cc;
        color: white;
      }
    }
  }
`;


export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 30vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top: 2px solid  #6600cc;
`;

export const BodyPost = styled.div`
  display: flex;
  width: 40vw;
  height: 30vh;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: orchid;
  border-top: 2px solid #6600cc;
`;

export const ButtonPostar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 5vh;
  align-items: center;
  position: relative;
  top: 10px;
  border-top: 2px solid #6600cc;
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 10vw;
`;

export const ContainerReactUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40vw;
  height: 5vh;
  background-color: white;
  border-top: 2px solid #6600cc;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  gap: 10px;
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

export const Comment = styled.div`
  display: flex;
  flex-direction: row;
  width: 20vw;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  margin-right: 20px;
  position: relative;
  left: 50px;
`;

export const ButtonComment = styled.div`
  display: flex;
  flex-direction: row;
  width: 20vw;
  justify-content: flex-end;
  align-items: center;

  button {
    width: 5vw;
    margin-right: 10px;
    padding: 5px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    background: linear-gradient(to right, #6600cc 0%, #009999 89%);
    :hover {
    color: orchid;
    }
  }
`;
