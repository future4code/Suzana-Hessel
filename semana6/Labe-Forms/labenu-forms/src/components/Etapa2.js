import React from "react";
import styled from "styled-components";

const Container6 = styled.div`
 
  padding-bottom: 20px;

`


export default class Etapa2 extends React.Component {
  state = {
    valorCurso: "",
    valorUnidadeEnsino: "",
    
  };

  
  onChangeCurso = (event) => {
    this.setState({ valorCurso: event.target.value });
  };
  onChangeUnidadeEnsino = (event) => {
    this.setState({ valorUnidadeEnsino: event.target.value });
  };
 
  
  render() {
     
    return (
        
      <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <form>
          <label>
            <p> 5. Qual curso?</p>
            <input
              placeholder={"curso"}
              onChange={this.onChangeCurso}
              value={this.state.valorCurso}
            />
          </label>
          <Container6>
            <p> 6. Qual a unidade de ensino? </p>
            <input
              placeholder={"unid. ensino"}
              onChange={this.onChangeUnidadeEnsino}
              value={this.state.valorUnidadeEnsino}
            />
          </Container6>

        </form>
        <button onClick={this.props.trocaDePagina}>Próxima Etapa</button>
      </div>
    );
  }
}
