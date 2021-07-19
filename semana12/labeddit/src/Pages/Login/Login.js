import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  history.push("/");

  return (
    <div>
      <h2>Login</h2>
      <label>
        <input type="email" value={email} placeholder="email" />
        <input type="password" value={password} placeholder="senha" />
        <button></button>
        <button>Register</button>
      </label>
    </div>
  );
};
export default LoginPage;
