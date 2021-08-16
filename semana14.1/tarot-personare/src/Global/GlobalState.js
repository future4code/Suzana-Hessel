import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [tarot, setTarot] = useState([]);

  useEffect(() => {
    getInfos();
  }, []);

  const getInfos = () => {
    const url = "tarot.json";
    fetch(url)
      .then((response) => response.json())
      .then((cards) => {
        setTarot(cards);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  };

  const urlCards = tarot.imagesUrl;
  const urlBackCard = tarot.imageBackCard;


  const states = { tarot };
  const setters = { setTarot };
  const requests = { getInfos };

  const data = { states, setters, requests, urlCards, urlBackCard };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
