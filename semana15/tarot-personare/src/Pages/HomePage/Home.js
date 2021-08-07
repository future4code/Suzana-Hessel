import React from "react";
import { useHistory } from "react-router-dom";
import { goToGame } from "../../routes/Cordinators";
import { ContainerHome, ButtonGoToGame } from "./styled";
import { Button } from "@material-ui/core";

const Home = () => {
  const history = useHistory();

  return (
    <ContainerHome>
      <ButtonGoToGame>
        <h3>Bem Vinda(o) ao Jogo de Tarot</h3>
        <p>Jogue a cartas e encontre a resposta para a sua questão!</p>
       
          <h4>Como jogar</h4>
          <p>
            Após iniciar o jogo, clique em "Embaralhar", escolha uma carta e
            seja feliz!
          </p>
      

        <Button onClick={() => goToGame(history)}>Ir para o Jogo</Button>
      </ButtonGoToGame>
    </ContainerHome>
  );
};

export default Home;
