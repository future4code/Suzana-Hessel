import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../constants/url";
import { PilotsCard } from "../components/pilots-card";

const PilotsContainer = styled.div`
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

export const PilotsPage = () => {
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/people`)
      .then(({ data }) => {
        console.log(data.results, "AQUIIIII");
        setPilots(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <PilotsContainer>
      {pilots.map((pilot, index) => (
        <PilotsCard key={index} name={pilot.name} image={"image"} />
      ))}
    </PilotsContainer>
  );
};
