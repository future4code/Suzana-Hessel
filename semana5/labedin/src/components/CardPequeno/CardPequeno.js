import React from 'react';
import {SmallcardContainer} from'./CardPequeno-Style'

function CardPequeno(props) {
    return (
        <SmallcardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.email }</h4>
            </div>
            <div>
                <p>{ props.endereco  }</p>
            </div>
        </SmallcardContainer>
    )
}

export default CardPequeno;