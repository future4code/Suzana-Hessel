import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToLogin, goToHome } from "../routes/coordinator";

const ContainerHeader = styled.div`

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  background-color: orange;

  h1 {
    margin-left: 5%;
  }

  button {
    margin-right: 5%;
  }
`;

const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token")

  }
  const rightButtonAction = () => {
    if(token){
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    }else{
      goToLogin(history)
    }
  }


  

  return (
    <ContainerHeader>
      {/* <button onClick={ () => goToHome(history)}><h1>LabEddit</h1></button> */}
      <h1>LabEddit</h1>
      
      <button onClick={rightButtonAction}>{rightButtonText}</button>
    </ContainerHeader>
  );
};

export default Header;
