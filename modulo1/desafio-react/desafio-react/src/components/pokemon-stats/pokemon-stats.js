import React from "react";
import styled from "styled-components";

export const PokeStatsContainer = styled.div`
    width: 100%;
    height: 400px;
    border: 1px solid black;
    margin: 10px;
`;

const PokeStats = (props) => {

    return (
        <PokeStatsContainer>
            Stats
            HP: {props.hitPoints}
            Attack: {props.attack}
            Defense: {props.defense}

        </PokeStatsContainer>
    )
}
export default PokeStats