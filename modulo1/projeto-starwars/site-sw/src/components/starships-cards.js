import React from "react";
import styled from "styled-components";

const StarshipsCardContainer = styled.div`
  width: 140px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: end;
  
 
`;

const StarshipCard = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #1F2738;
  color: white;
  border-radius:10px;
  img {
    width: 100%;
    height: 70%;
    border-radius: 10px 10px 0 0;
  }
`;

export const StarshipsCard = (props) => {
  return (
    <StarshipsCardContainer>
      <StarshipCard>
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5df37f7d4e2917000782fbf7/Tri-Wing-S-91x-Pegasus-Starfighter/960x0.jpg?fit=bounds&format=jpg&width=960"
          alt="starships"
        />
        {props.name}
      </StarshipCard>
    </StarshipsCardContainer>
  );
};
