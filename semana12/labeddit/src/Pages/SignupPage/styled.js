import styled from "styled-components";

export const ContainerSignup = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #6600cc;

`;
export const BoxSignup = styled.div`
  display: flex;
  width: 30vw;
  height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  border: 2px solid #6600cc;
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  input {
    width: 18vw;
    height: 5vh;
    border: none;
  }

 
  `
export const ButtonSignup = styled.div`
 button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 18vw;
    height: 5vh;
    border: none;
    font-weight: bold;
    font-size: 12px;
    background: linear-gradient(to right, #6600cc  0%,  #009999 89%);
    color: white;
    border: none;
    :hover {
      color: orchid;
    }
  }
`
