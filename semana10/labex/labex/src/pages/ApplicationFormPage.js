import React from "react";
// import axios from "axios";
// import styled from "styled-components";
import { useHistory } from "react-router";

const ApplicationFormPage = () => {
  const history = useHistory();

  const goToBack = () => {
    history.push("/trips/list");
  };

  const goToSend = () => {
    alert("Inscrição enviada com sucesso *-* ")
  }

  return (
    <div>
      <h2>Inscreva-se para uma Viagem</h2>
      <div>
        <form>
          <label>
            <select>
              <option>Escolha uma Viagem</option>
              <option>Escolha uma Viagem</option>
              <option>Escolha uma Viagem</option>
              <option>Escolha uma Viagem</option>
              <option>Escolha uma Viagem</option>
              <option>Escolha uma Viagem</option>
              <option>Escolha uma Viagem</option>
            </select>
            <input value="" placeholder="Nome" onChange="" />
            <input value="" placeholder="Idade" onChange="" />
            <input value="" placeholder="Texto de Candidatura" onChange="" />
            <input value="" placeholder="Profissão" onChange="" />
            <select>
              <option>Escolha um País</option>
              <option>Escolha um País</option>
              <option>Escolha um País</option>
              <option>Escolha um País</option>
              <option>Escolha um País</option>
              <option>Escolha um País</option>
              <option>Escolha um País</option>
              <option>Escolha um País</option>
            </select>
          </label>
        </form>
      </div>
      <button onClick={goToBack}>Voltar</button>
      <button onClick={goToSend}>Enviar</button>
    </div>
  );
};

export default ApplicationFormPage;
