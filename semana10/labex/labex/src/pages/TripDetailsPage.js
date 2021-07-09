import React from "react";
import axios from "axios";
// import styled from "styled-components";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { BASE_URL } from "../constants/BASE_URL";

const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
      alert("Você não está logado!");
      history.push("/login");
    }
  }, []);
};

const TripDetailsPage = () => {
  const history = useHistory();

  useProtectedPage();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${BASE_URL}/trip/b5RAoqmCaToulSlXEc8l`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
  }, []);

  const goToBack = () => {
    history.push("/admin/trips/list");
  };

  return (
    <div>
      Viagem teste
      <p>ipsum lorem .....</p>
      {TripDetailsPage.props = TripDetailsPage}
      <button onClick={goToBack}>Voltar</button>
    </div>
  );
};

export default TripDetailsPage;
