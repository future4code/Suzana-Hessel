import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PokeHeader from "../../components/pokemon-header/pokemon-header";
import PokeStats from "../../components/pokemon-stats/pokemon-stats";
import styled from 'styled-components';
import {PokeImage} from "../../components/pokemon-image/pokemon-image"

export const DetailsPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`;

const DetailsPage = () => {
  const [details, setDetails] = useState({
    name: "Sem nome",
    types: [],
    hp: 0,
    attack: 0,
    defense: 0,
  });

  const name = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      console.log(res.data);
      setDetails(res.data);
    }).catch((err) => {
        
    })
  }, []);

 
  
  return (
      <DetailsPageContainer style={{width: '40%'}}>
          <div>
              <PokeHeader 
              name={details.name}
              type={details.types}
              />
              <PokeStats
              hitPoints={details.hp}
              attack={details.attack}
              defense={details.defense}
              />
          </div>
          <PokeImage></PokeImage>
      </DetailsPageContainer>
  )
};
export default DetailsPage