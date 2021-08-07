import React, {useState} from "react";
import TarotCards from "../../components/TarotCards/TarotCards";
import TarotBackCards from "../../components/TarotBackCards/TarotBackCards";
import { goToHome } from "../../routes/Cordinators";
import { useHistory } from "react-router-dom";
import {GameContainer, ButtonGamePage, ButtonExit } from "./styled"
import { Button } from "@material-ui/core";


const GamePage = () => {
  const history = useHistory();
  const [cardSide, setCardSide] = useState([true])

  const blendCards = () => {
    setCardSide(!cardSide)
  }

  

  return (
    <GameContainer>
      <ButtonExit>
          <Button onClick={() => goToHome(history)}>Sair do Jogo</Button>
          </ButtonExit>
     < ButtonGamePage>
      <Button onClick={blendCards}> {cardSide ? <p>EMBARALHAR</p> : <p>REINICIAR</p> } </Button> 
      </ButtonGamePage>
      {cardSide ? <TarotCards /> : <TarotBackCards />}
      
    </GameContainer>
  );
};

export default GamePage;
