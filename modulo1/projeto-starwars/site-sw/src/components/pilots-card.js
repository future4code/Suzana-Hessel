import React from "react";
import styled from "styled-components";

const PilotCardContainer = styled.div`
  width: 140px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: end;
 
`;

const PilotCard = styled.div`
 width: 100%;
  height: 100%;
  text-align: center;
  background:#1F2738;;
  color: white;
  border-radius:10px;
  img {
    width: 100%;
    height: 70%;
    border-radius: 10px 10px 0 0;
  }
`;

export const PilotsCard = (props) => {
  return (
    <PilotCardContainer>
      <PilotCard>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDIRiMS6ZfUksGDhaMYsXHj1q4RREfTfOcFEdeor_J9auRtryAhmW9h8tXcwNonjfOYk&usqp=CAU"
          alt="starwars"
        />
        {props.name}
      </PilotCard>
    </PilotCardContainer>
  );
};
