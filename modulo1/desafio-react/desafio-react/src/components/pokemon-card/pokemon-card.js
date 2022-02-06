import React from "react";
import styled from 'styled-components';

export const PokeCardContainer = styled.div`
    width: 50%;
    height: 100px;
    border: 1px solid black;
    
`;

const PokeCard = (props) => {
    return (
        <PokeCardContainer onClick={props.onClick}>
            Name: {props.pokemon.name}
        </PokeCardContainer>
    )
}
export default PokeCard