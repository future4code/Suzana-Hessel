import styled from "styled-components";
import StarWars from "./img/star-wars.jpg";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-image: url(${StarWars});
  background-position: center;
  background-size: cover;
`;
export const ActionButton = styled.div`
  width: 20%;
  text-align: center;
  padding: 20px;
  border: 2px solid white;
  background-color: aliceblue;
  border-radius: 20px;
  opacity: 50%;
  font-size: 20px;
  :hover {
    cursor: pointer;
    background-color: aliceblue;
    opacity: 30%;
    color: black;
  }
`;
