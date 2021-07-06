import React from "react";
// import axios from "axios";
// import styled from "styled-components";
import { useHistory } from "react-router";

 const TripDetailsPage = () => {

  const history = useHistory();

  const goToBack = () => {
    history.push("/adminPage")
  }

  return (
    <div >
      Viagem teste 
      <p>ipsum lorem .....
      </p>
      <button onClick={goToBack}>Voltar</button>
    </div>
  );
}

export default TripDetailsPage;