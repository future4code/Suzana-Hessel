import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";

import {Cards, CardsName, FrontCards} from "./styled"


const TarotCards = () => {
  const { states, urlCards } = useContext(GlobalStateContext);

  const tarot = states.tarot;


  const frontCards = tarot.cards
    ? tarot.cards.map((card) => {
        return (
          <Cards key={card.name}>
           <CardsName>{card.name}</CardsName> 
            <img src={urlCards + card.image} alt={card.image} />
          </Cards>
        );
      })
    : "";

  return <FrontCards>{frontCards}
  </FrontCards>;
};

export default TarotCards;
