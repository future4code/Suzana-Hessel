import React from "react";
import { useHistory } from "react-router-dom";
import { ContainerLogin } from "./styled";
import useForm from "../../hooks/useForm";
import {login} from "../../services/users"
import {goToSignup} from "../../routes/coordinator"

const LoginPage = ({rightButtonText, setRightButtonText}) => {

  const { form, onChange, clear } = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setRightButtonText);
    
  };


  return (
    <ContainerLogin>
      <h2>Login</h2>
      <form onSubmit={onSubmitForm} >
        <input
          type="email"
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="e-mail"
          required
        />
        <input
          type="password"
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="senha"
          required
        />
        <button onClick={onSubmitForm} type={"submit"}>
          Entrar
        </button>
        
        <button onClick={() => goToSignup(history)}><p>NÃO POSSUI CONTA? CADASTRE-SE</p></button>
      </form>
    </ContainerLogin>
  );
};
export default LoginPage;
