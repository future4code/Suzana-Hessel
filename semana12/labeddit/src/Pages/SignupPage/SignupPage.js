import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { signup } from "../../services/users";
import { ContainerSignup, BoxSignup, ButtonSignup } from "./styled";
import { TextField, Button } from "@material-ui/core";

const SignupPage = () => {
  const { form, onChange, clear } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const onSubmitForm = () => {
    signup(form, clear, history);
  };

  return (
    <ContainerSignup>
      <BoxSignup>
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
            inputProps={{
              pattern:
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$",
            }}
            title={
              "A senha deve ter no mínimo seis caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número!"
            }
            placeholder="Senha"
            required
          />
          <ButtonSignup>
            <Button onClick={onSubmitForm}>CADASTRAR</Button>
          </ButtonSignup>
        </form>
      </BoxSignup>
    </ContainerSignup>
  );
};
export default SignupPage;
