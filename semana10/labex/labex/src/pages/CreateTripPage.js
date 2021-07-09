import React from "react";
// import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL, headers } from "../constants/BASE_URL";

const ContainerForms = styled.div`
  display: flex;
  width: 100%;
  height: 93vh ;
  flex-direction: column;
  background-color: violet;
  align-items: center;
  justify-content: center;
  gap: 20px;

  button {
    width: 15vw;
    height: 5vh;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50vw;
  }

  input {
    height: 4vh;
  }

  select{
    height: 5vh;
  }
`;

const CreateTripPage = (props) => {

  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault()
    console.log("Viagem adicionada com sucesso *-* ")

   const body = {

    name: "Ano novo em Mercúrio",
    planet: "Mercúrio",
    date: "31/12/2019",
    description: "Venha passar a virada pertinho do Sol!",
    durationInDays: 7
   } 

   axios
   .post(`${BASE_URL}/trips`, body, headers)
   .then((response)=>{
    console.log("Certo: ", response);
    alert("Viagem adicionada com sucesso *-* ");
   })
   .catch((err)=>{
    console.log("Errado: ", err.data);
   })


  }

  const goToBack = () => {
    history.push("/admin/trips/list");
  };

  

  

  return (
    <ContainerForms>
      <form onSubmit={handleClick} >
        <label>
          <input value="" placeholder="Nome" onChange="" required />
          <select>
            <option>Escolha um Planeta</option>
            <option>Mercúrio</option>
            <option>Vênus</option>
            <option>Terra</option>
            <option>Marte</option>
            <option>Júpiter</option>
            <option>Saturno</option>
            <option>Urânio</option>
            <option>Netuno</option>
            <option>Plutão</option>
          </select>
          <input type="date" value="" placeholder="Data" onChange="" />
          <input value="" placeholder="Descrição" onChange="" />
          <input value="" placeholder="Duração em Dias" onChange="" />
        </label>
      </form>
      <button onClick={goToBack}>Voltar</button>
      <button onClick={CreateTripPage}>Criar</button>
    </ContainerForms>
  );
};

export default CreateTripPage;
