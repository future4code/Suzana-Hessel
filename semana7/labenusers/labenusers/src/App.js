import React from "react";
import axios from "axios";
// import ListaUsuarios from "./components/ListaUsuarios";
import styled from "styled-components";

const AppContainer = styled.div`



  button {
    background-color: orange;
    color: white;
    position: relative;
    top: 20px;
    font-size: inherit;
    font-family: inherit;
    color: white;
    outline: none;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }
`;

const ContainerCadastro = styled.div`
  display: grid;
  grid-template-columns:  1fr;
  justify-content: center;
  position: relative;
  left: 100px;
  top: 100px;
  height: 250px;
  width: 20%;
  border: 1px solid black;
  margin: 0 auto;
  padding: 30px;

  

  button {
    background-color: orange;
    color: white;
    width: 35%;
    height: 15%;
    position: relative;
    right: 40px;
    top: 70px;
    font-size: inherit;
    font-family: inherit;
    color: white;
    outline: none;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }
`;


const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "suzana-hessel-molina",
  },
};

class App extends React.Component {
  state = {
    listaUsuarios: [],
    inputCadastroNome: "",
    inputCadastroEmail: "",
    trocaTela: false,
  };

  componentDidMount() {
    this.pegarlistaUsuarios();
  }

  mudaInputCadastroNome = (event) => {
    this.setState({ inputCadastroNome: event.target.value });
  };

  mudaInputCadastroEmail = (event) => {
    this.setState({ inputCadastroEmail: event.target.value });
  };

  pegarlistaUsuarios = () => {
    axios.get(url, headers);
    // .then((res) => {
    //   this.setState({ listaUsuarios: res.result.list });
    // })
    // .catch((err) => {
    //   alert(err.response);
    // });
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
        this.pegarlistaUsuarios();
      })
      .catch((err) => {
        alert("Preencha seus Dados!");
      });
  };

  onClickTrocaTela = () => this.setState({ trocaTela: !this.state.trocaTela });

  render() {
    const nomesUsuarios = this.state.listaUsuarios.map((usuario) => {
      return <li key={usuario.id}>{usuario.name}</li>;
    });
    return (
      <AppContainer>
        <button onClickTrocaTela={this.trocaTela}>
          {" "}
          Ir para lista de usuários cadastrados
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
        {nomesUsuarios}
      </AppContainer>
    );
  }
}

export default App;
