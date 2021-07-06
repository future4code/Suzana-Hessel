import React from "react";
// import axios from "axios";
// import styled from "styled-components";
import { useHistory } from "react-router";

 const AdminHomePage = () => {
   const history = useHistory();

   const goToBack = () => {
     history.push("/loginAdm")
   }

   const goToCreateTrip = () => {
    history.push("/createTrip")
  }

   const goToLogout = () => {
    history.push("/")
  }

  const goToTripDetais = () => {
    history.push("/tripDetails")
  }


  return (
    <div >
      <h2>Painel Administrativo</h2>
     <div>
       Viagem teste
       <button onClick={goToTripDetais}>Detalhes da Viagem</button>
     </div>
      <button onClick={goToBack}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={goToLogout}>Logout</button>
    </div>
  );
}

export default AdminHomePage;