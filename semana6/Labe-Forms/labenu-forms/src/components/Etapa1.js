import React from "react";
import styled from "styled-components";

export default class Etapa1 extends React.Component {
  state = {
    valorNome: "",
    valorIdade: "",
    valorEmail: "",
    valorEscolaridade: "",
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
  onChangeEscolaridade = (event) => {
    this.setState({ valorEscolaridade: event.target.value });
  };

  render() {
    return (
      <div className="App">
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

          <label>
          <p> 4. Qual a sua escolaridade?</p> 
          
          
            onChange={this.onChangeEscolaridade}
            <select>

            <option value={"Ensino médio incompleto"} > Ensino médio incompleto
            <option value={"Ensino médio completo"} > Ensino médio incompleto
            <option value={"Ensino superior incompleto"} > Ensino médio incompleto
            <option value={"Ensino superior completo"} > Ensino médio incompleto
            </select>
                
                
          
        </label>
          
        </form>

        <button onClick={this.props.trocaDePagina}>Próxima Etapa</button>
      </div>
    );
  }
}
