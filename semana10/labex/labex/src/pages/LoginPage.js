import React from "react";
import axios from "axios";
// import styled from "styled-components";
import { useState } from "react";
import { useHistory } from "react-router";
import { BASE_URL } from "../constants/BASE_URL";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const goToAdminPage = () => {
    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${BASE_URL}/login`, body)
      .then((response) => {
        console.log("Certo: ", response.data.token);
        localStorage.setItem("token", response.data.token);
        history.push("/");
      })
      .catch((err) => {
        console.log("Errado: ", err.response);
      });
  };

  const goToBack = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>Área do Administrador</h2>
      <p>Login</p>
      <label>
        <input
          type="email"
          value={email}
          placeholder="e-mail"
          onChange={onChangeEmail}
        />
        <input
          type="password"
          value={password}
          placeholder="senha"
          onChange={onChangePassword}
        />
        <button onClick={goToAdminPage}>Entrar</button>
        <button onClick={goToBack}>Voltar</button>
      </label>
    </div>
  );
};

export default LoginPage;
