import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: palegoldenrod;

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
  }
`;



