import React from "react";
import CardDeVideo from "./components/card-de-video";
import styled from "styled-components";

const ContainerApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0%;
  margin: 0%;
  height: auto;
`;

const ContainerHeader = styled.div`
  white: 100%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: auto;
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: rows;
  gap: 5%;
  padding-top: 2%;
  padding-bottom: 5%;
  justify-content: center;

  button {
    width: 100px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  background: #333b3e;
  color: white;
  bottom: 0;
  padding: 0;
  margin: 0;
  display: flex;
`;

const App = () => {
  return (
    <ContainerApp>
      <ContainerHeader>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </ContainerHeader>
      <ContainerButtons>
        <button>Início</button>
        <button>Em alta</button>
        <button>Inscrições</button>
        <button>Originais</button>
        <button>Histórico</button>
      </ContainerButtons>
      <div>
        <CardDeVideo />
      </div>
      <Footer>
        <h1>Footer</h1>
      </Footer>
    </ContainerApp>
  );
};
export default App;
