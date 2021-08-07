import styled from "styled-components";

export const ContainerFeed = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 800vh;
  align-content: center;
  align-items: center;
  gap: 20px;
  color: #6600cc;
  background-color: white;
`;

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 30vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid #6600cc;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  input {
    display: flex;
    width: 30vw;
  }
`;

export const ButtonPostar = styled.div`
display: flex;
flex-direction:column;
width: 30vw;
height: 5vh;
align-items: center;

button{
  display: flex;
  width: 10vw;
  color: white;
  border-radius: 20px;
  background: linear-gradient(to right, #6600cc 0%, #009999 89%);
  :hover {
    color: orchid;
      
    }
}

`;
