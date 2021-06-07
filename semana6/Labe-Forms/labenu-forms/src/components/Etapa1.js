import React from "react";
import styled from "styled-components";

const Container4 = styled.div`
 
  padding-bottom: 20px;

`

export default class Etapa1 extends React.Component {
  state = {
    valorNome: "",
    valorIdade: "",
    valorEmail: "",
    valorEscolaridade: " ",
  };

  
  onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value });
  };
  onChangeIdade = (event) => {
    this.setState({ valorIdade: event.target.value });
  };
  onChangeEmail = (event) => {
    this.setState({ valorEmail: event.target.value });
  };
  onChangeEscolaridade = (valorEscolaridade) => {
    this.setState({ valorEscolaridade });
  };

  render() {
     
    return (
        
      <div>
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <form>
          <label>
            <p> 1. Qual o seu nome?</p>
            <input
              placeholder={"nome"}
              onChange={this.onChangeNome}
              value={this.state.valorNome}
            />
          </label>
          <label>
            <p> 2. Qual sua idade?</p>
            <input
              placeholder={"idade"}
              onChange={this.onChangeIdade}
              value={this.state.valorIdade}
            />
          </label>
          <label>
          <p> 3. Qual seu e-mail?</p> 
            <input
              placeholder={"e-mail"}
              onChange={this.onChangeEmail}
              value={this.state.valorEmail}
            />
          </label>
          <Container4>
          <p> 4. Qual a sua escolaridade?</p> 
            <select>
                value={this.state.valorEscolaridade}
                onChange={this.onChangeEscolaridade}
                <option>
                Ensino médio incompleto
                </option>
                <option>
                Ensino médio completo
                </option>
                <option>
                Ensino superior incompleto
                </option>
                <option>
                Ensino superior completo
                </option>
            </select>
        </Container4>
        </form>
        <button onClick={this.props.trocaDePagina}>Próxima Etapa</button>
      </div>
    );
  }
}
