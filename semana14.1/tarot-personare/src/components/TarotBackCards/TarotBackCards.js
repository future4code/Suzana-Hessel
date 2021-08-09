import React, { useContext, useState } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import {ContainerBackCards, BackCards, Cards, BoxChosenCard, CardsName} from "./styled"


const TarotBackCards = () => {
  const { states, urlBackCard, urlCards } = useContext(GlobalStateContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [side, setSide] = useState(false)

  const tarot = states.tarot;


  const randomCards = (min, max) => {
      const i = Math.floor(Math.random() * 10);
      setName(states.tarot.cards[i].name)
      setImage(states.tarot.cards[i].image)
      setSide(!false)
    }


  const backCards = 
  tarot.cards.map((card) => {
         return (
           <Cards onClick={randomCards}key={card.name}>
             <img src={urlBackCard} alt="img-backcard" />
           </Cards>
         );

       })
  

  return (
<ContainerBackCards>
    
   {side ?
   <BoxChosenCard> 
   <Cards>
    <chosenCard onClick={randomCards}><CardsName><p>{name}</p></CardsName>
    <img src={urlCards + image} alt={image} />
    </chosenCard>
    </Cards>
    </BoxChosenCard> 
 : 
 <BackCards>
   {backCards} 
    </BackCards>
}
    </ContainerBackCards>
  )
};

export default TarotBackCards;

