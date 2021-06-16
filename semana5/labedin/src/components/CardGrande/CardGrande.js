import React from 'react';
import {BigcardContainer} from'./CardGrande-Style'

function CardGrande(props) {
    return (
        <BigcardContainer>
            <img src={ props.imagem }/>
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigcardContainer>
    )
}

export default CardGrande;