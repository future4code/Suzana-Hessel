import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 25vw;
  height: 50%;
  border-bottom: 2px solid black;

  button {
    width: 10vw;
    cursor: pointer;
    background-color: white;
    border: white;
  }
  img {
    width: 2vw;
  }
`;

const Header = (props) => {
  const ButtonRenderer = () => {
    switch (props.changePage) {
      case "App":
        return (
          <div>
            <button onClick={props.onClickChangePage}>
              <img
                src={
                  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emoji-one/98/heart-with-arrow_1f498.png"
                }
                alt="icone-userHeart"
              />
            </button>
          </div>
        );
      case "MatchesScreen":
        return (
          <div>
            <button onClick={props.onClickGoApp}>Voltar</button>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <Title>
      <h2>astromatch</h2>
      {ButtonRenderer()}
    </Title>
  );
};

export default Header;
