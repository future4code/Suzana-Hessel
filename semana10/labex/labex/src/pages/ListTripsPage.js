import React from "react";
// import axios from "axios";
// import styled from "styled-components";
import { useHistory } from "react-router-dom";

 const ListTripsPage = () => {

  const history = useHistory()

  const goToBack = () => {
    history.push("/")

  }

  const goToApplicationForm = () => {
    history.push("/trips/application")
  }

  return (
    <div >
     <h2>Lista de Viagens</h2> 
     
     <button onClick={goToBack}>Voltar</button>
     <button onClick={goToApplicationForm}>Inscreva-se</button>
    </div>
  );
}

export default ListTripsPage;