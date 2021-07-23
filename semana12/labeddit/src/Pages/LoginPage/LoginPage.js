import React from "react";
import { useHistory } from "react-router-dom";
import { ContainerLogin } from "./styled";
import useForm from "../../hooks/useForm";
import {login} from "../../services/users"
import {goToSignup} from "../../routes/coordinator"
import { TextField, Button } from "@material-ui/core";


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
        <TextField
          type="email"
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="e-mail"
          required
        />
        <TextField
          type="password"
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="senha"
          required
        />
        <Button onClick={onSubmitForm} type={"submit"}>ENTRAR</Button>
        <div>
        <Button onClick={() => goToSignup(history)}><p>NÃO POSSUI CONTA? CADASTRE-SE</p></Button>
        </div>
      </form>
    </ContainerLogin>
  );
};
export default LoginPage;
