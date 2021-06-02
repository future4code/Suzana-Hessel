import React from 'react';
import {ImageButtonContainer} from'./ImagemButton-Style'


function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;