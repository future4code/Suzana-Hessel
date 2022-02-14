import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import { StarshipsCard } from "../components/starships-cards";

const StarshipsContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(6, 300px);
  justify-items: center;
  row-gap: 10px;
  justify-content: center;
  padding-top: 5%;
  background-color:#F56F36;

`;

export const StarshipsPage = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/starships`)
      .then(({ data }) => {
        console.log(data.results, "AQUIIIII");
        setStarships(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <StarshipsContainer>
      {starships.map((starship, index) => (
        <StarshipsCard key={index} name={starship.name} image={"image"} />
      ))}
    </StarshipsContainer>
  );
};
