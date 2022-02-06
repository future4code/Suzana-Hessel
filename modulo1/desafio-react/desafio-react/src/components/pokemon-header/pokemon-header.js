import React from "react";
import styled from "styled-components";

const PokeHeaderContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid black;
    margin: 10px;
`;

const PokeHeader = (props) => {
    
    return (
        <PokeHeaderContainer>
            Name: {props.name}
            <br/>
            {props.types.map((type, index) => (
                <React.Fragment key={index}>
                Tipo: {(type.type.name)}
                <br/>
                </React.Fragment>
            ))}

        </PokeHeaderContainer>
    )
}
export default PokeHeader