import React from "react";
import styled from "styled-components";


const ContainerChoice = styled.div`
  display: flex;
  flex-direction: row;

  button {
    display: flex;
    flex-direction: row;
    width: 3vw;
    cursor: pointer;
    background-color: white;
    border: black;

    img {
      width: 3vw;
    }
  }
`;

const Footer = (props) => {
  return (
    <ContainerChoice>
      <button onClick={props.onClickChoiceNo}>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Deletion_icon.svg/1024px-Deletion_icon.svg.png"} alt="icone-coração" />
      </button>

      <button onClick={props.onClickChoiceYes}>
        <img src={"https://www.freeiconspng.com/thumbs/yes-png/yes-png-9.png"} alt="icone-coração" />
      </button>
    </ContainerChoice>
  );
};

export default Footer;
