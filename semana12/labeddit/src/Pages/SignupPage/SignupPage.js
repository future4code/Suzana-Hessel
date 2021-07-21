import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signup } from "../../services/users";

const SignupPage = () => {


  const { form, onChange, clear } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log("FORM", form)
    signup(form, clear, history);
  };

  return (
    <div>
      <h2>Cadastre-se</h2>
      <form onSubmit={onSubmitForm}>
        <input
          name="username"
          type="username"
          value={form.username}
          onChange={onChange}
          placeholder="Nome de usuário"
        />
        <input
         name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
        />
        <input
        name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
        />
        <button onClick={onSubmitForm}>Cadastrar</button>
      </form>
    </div>
  );
};
export default SignupPage;
