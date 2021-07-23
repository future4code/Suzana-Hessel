import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signup } from "../../services/users";
import {ContainerSignup} from "./styled"
import { TextField } from "@material-ui/core";

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
    <ContainerSignup>
      <h2>Cadastre-se</h2>
      <form onSubmit={onSubmitForm}>
        <TextField
          name="username"
          type="username"
          value={form.username}
          onChange={onChange}
          placeholder="Nome de usuário"
          required
        />
        <TextField
         name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          required
        />
        <TextField
        name="password"
          type="password"
          value={form.password}
          onChange={onChange}
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title={"A senha deve ter no mínimo oito caracteres, pelo menos uma letra e um número!"}
          placeholder="Senha"
          required
        />
        <button onClick={onSubmitForm}>CADASTRAR</button>
      </form>
    </ContainerSignup>
  );
};
export default SignupPage;
