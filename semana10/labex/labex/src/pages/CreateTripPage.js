import React from "react";
// import axios from "axios";
// import styled from "styled-components";
import { useHistory } from "react-router";

const CreateTripPage = () => {
  const history = useHistory();

  const goToBack = () => {
    history.push("/admin/trips/list");
  };

  const goToCreate = () => {
    alert("Viagem adicionada com sucesso *-* ");
  };


  return (
    <div>
      <label>
        <input value="" placeholder="Nome" onChange="" />
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
      <button onClick={goToBack}>Voltar</button>
      <button onClick={goToCreate}>Criar</button>
    </div>
  );
};

export default CreateTripPage;
