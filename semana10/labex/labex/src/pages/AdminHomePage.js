import React from "react";
// import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router";

const Container = styled.div`
display: flex;
flex-direction: column;
background-color: orange;
width: 100%;
height: 150vh;
gap: 20px;
color: white;
align-items: center;
/* background-repeat: no-repeat;
background-size: 110% 150vh;
filter: contrast(200%);
background-image: url("https://img.etimg.com/thumb/msid-73516890,width-640,resizemode-4,imgsize-175107/30-dishes-for-gaganyaan-astronauts.jpg"); */

`


 const AdminHomePage = () => {
   const history = useHistory();

   const goToBack = () => {
    history.push("/")
   }

   const goToCreateTrip = () => {
    history.push("/admin/trips/create")
  }

   const goToLogout = () => {
    history.push("/login")
  }

  const goToTripDetais = () => {
    history.push("/admin/trips/:id")
  }


  return (
    <Container >
      <h2>Painel Administrativo</h2>
     <div>
       Viagem teste
       <button onClick={goToTripDetais}>Detalhes da Viagem</button>
     </div>
      <button onClick={goToBack}>Voltar</button>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={goToLogout}>Logout</button>
    </Container>
  );
}

export default AdminHomePage;