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
    width: 10vw;
  }

  button {
    width: 5vw;
  }
`;
