import React from "react";
import styled from "styled-components";

const ContainerVideo = styled.div `
width: 100%;
height: auto;
display: grid;
grid-template-rows: repeat(2, 1fr);
grid-template-columns: repeat(4, 15%);
gap: 5%;
justify-content: center;
align-content: center;
text-align: center;


img{
    width: 120%;
    border-radius: 20px;
}

`

const CardDeVideo = () => {
  const onClickReproduzVideo = () => {
    alert("O vídeo está sendo reproduzido");
  };
  

  return (
    <ContainerVideo>
      <div onClick={onClickReproduzVideo}>
        <img src="https://picsum.photos/400/400?a=1 " alt="" />
        <h4>Título do Vídeo</h4>
      </div>
      <div onClick={onClickReproduzVideo}>
        <img src="https://picsum.photos/400/400?a=2 " alt="" />
        <h4>Título do Vídeo</h4>
      </div>
      <div onClick={onClickReproduzVideo}>
        <img src="https://picsum.photos/400/400?a=3 " alt="" />
        <h4>Título do Vídeo</h4>
      </div>
      <div onClick={onClickReproduzVideo}>
        <img src="https://picsum.photos/400/400?a=4 " alt="" />
        <h4>Título do Vídeo</h4>
      </div>
      <div onClick={onClickReproduzVideo}>
        <img src="https://picsum.photos/400/400?a=5 " alt="" />
        <h4>Título do Vídeo</h4>
      </div>
      <div onClick={onClickReproduzVideo}>
        <img src="https://picsum.photos/400/400?a=6 " alt="" />
        <h4>Título do Vídeo</h4>
      </div>
      <div onClick={onClickReproduzVideo}>
        <img src="https://picsum.photos/400/400?a=7 " alt="" />
        <h4>Título do Vídeo</h4>
      </div>
      <div onClick={onClickReproduzVideo}>
        <img src="https://picsum.photos/400/400?a=8 " alt="" />
        <h4>Título do Vídeo</h4>
      </div>
    </ContainerVideo>
  );
};
export default CardDeVideo;
