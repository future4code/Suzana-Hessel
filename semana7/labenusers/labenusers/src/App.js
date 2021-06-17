import React from "react";
import axios from "axios";
import ListaUsuarios from "./components/ListaUsuarios";
import styled from "styled-components";

const AppContainer = styled.div`
  button {
    background-color: orange;
    color: white;
    position: relative;
    top: 20px;
    left: 50px;
    width: 300px;
    height: 30px;
    font-size: inherit;
    font-family: inherit;
    color: white;
    outline: none;
    border: none;
    overflow: hidden;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const ContainerCadastro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  position: relative;
  top: 100px;
  height: 250px;
  width: 20%;
  border: 2px solid orange;
  border-radius: 5px;
  margin: 0 auto;
  padding: 30px;
  background-color: crimson;

  label {
    position: relative;
    left: 50px;
    
  }

  p {
    position: relative;
    top: 15px;
    font-weight: bold;
    color: orange;
  }
  input {
    width: 200px;
  }

  button {
    background-color: orange;
    color: white;
    width: 35%;
    height: 15%;
    position: relative;
    left: 45px;
    top: 45px;
    font-size: inherit;
    font-family: inherit;
    color: white;
    outline: none;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }
`;

const ButtonVoltar = styled.span`
  display: block;
  position: relative;
  bottom: 180px;
 
`

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "suzana-hessel-molina",
  },
};

class App extends React.Component {
  state = {
    inputCadastroNome: "",
    inputCadastroEmail: "",
    trocaTela: false,
  };

  mudaInputCadastroNome = (event) => {
    this.setState({ inputCadastroNome: event.target.value });
  };

  mudaInputCadastroEmail = (event) => {
    this.setState({ inputCadastroEmail: event.target.value });
  };

  criarCadastro = () => {
    const body = {
      name: this.state.inputCadastroNome,
      email: this.state.inputCadastroEmail,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Usuário cadastrado com sucesso!");
        this.setState({ inputCadastroNome: "" });
        this.setState({ inputCadastroEmail: "" });
      })
      .catch((err) => {
        alert("Preencha seus Dados!");
      });
  };

  onClickTrocaTela = () => this.setState({ trocaTela: !this.state.trocaTela });

  render() {
    return (
      <AppContainer>
        {this.state.trocaTela ? (
          <ButtonVoltar>
            <ListaUsuarios/>
            <button onClick={this.onClickTrocaTela}>Voltar para Página de Cadastro</button>
          </ButtonVoltar>
        ) : (
          <div>
            <button onClick={this.onClickTrocaTela}>
              Ir para Lista de Usuários Cadastrados
            </button>
            <ContainerCadastro>
              <label>
                <p>Nome: </p>
                <input
                  value={this.state.inputCadastroNome}
                  onChange={this.mudaInputCadastroNome}
                  placeholder={"nome"}
                ></input>
                <p>E-mail: </p>
                <input
                  value={this.state.inputCadastroEmail}
                  onChange={this.mudaInputCadastroEmail}
                  placeholder={"e-mail"}
                ></input>
                <button onClick={this.criarCadastro}>Enviar</button>
              </label>
            </ContainerCadastro>
          </div>
        )}
      </AppContainer>
    );
  }
}

export default App;
