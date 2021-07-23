import styled from "styled-components";

export const ContainerSignup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  background-color: yellow;
  justify-content: center;
  align-items: center;

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
