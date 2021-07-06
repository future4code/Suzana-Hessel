import React from "react";
// import axios from "axios";
// import styled from "styled-components";
import {useHistory}  from "react-router-dom";

 const HomePage = () => {

   const history = useHistory()

   const goToTripList = () => {
     history.push("/tripList")

   }

   const goToLoginPage = () => {
     history.push("/loginAdm")
   }

  return (
    <div >
      <h1>
        LabeX
      </h1>
      <div>
        <button onClick={goToTripList}>Lista de Viagens</button>
      </div>
      <div>
        <button onClick={goToLoginPage}>Área do Administrador</button>
      </div>
    </div>
  );
}

export default HomePage;
