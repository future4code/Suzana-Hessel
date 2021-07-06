import React from "react";
// import axios from "axios";
// import styled from "styled-components";
import { useHistory } from "react-router";

 const LoginPage = () => {
   
  const history = useHistory() 

  const goToAdminPage = () => {
    history.push("/adminPage")
  }

  const goToBack = () => {
    history.push("/")
  }

  return (
    <div >
      <h2>Área do Administrador</h2>
      <p>Login</p>
      <label>
      <input
            value=""
            placeholder="e-mail"
            onChange=""
            />
              <input
            value=""
            placeholder="senha"
            onChange=""
            />
            <button onClick={goToAdminPage}>Entrar</button>
            <button onClick={goToBack}>Voltar</button>
      </label>
    </div>
  );
}

export default LoginPage;