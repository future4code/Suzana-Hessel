import React from "react";
import styled from "styled-components";

const Container8 = styled.div`
 
  padding-bottom: 20px;

`
export default class Etapa3 extends React.Component {
  state = {
    valorCursoIncompleto: "",
    valorCursoComplementar: "",
    
  };

  
  onChangeCursoIncompleto = (event) => {
    this.setState({ valorCursoIncompleto: event.target.value });
  };
  onChangeCursoComplementar= (event) => {
    this.setState({ valorCursoComplementar: event.target.value });
  };
 
  
  render() {
    return (
        
      <div>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <form>
          <label>
            <p> 5. Por que você não terminou um curso de graduação?</p>
            <input
              placeholder={"curso"}
              onChange={this.onChangeCursoIncompleto}
              value={this.state.valorNome}
            />
          </label>
          <Container8 >
          <p> 6. Você fez algum curso complementar? </p>
             <select>
                    onChange={this.onChangeCursoComplementar}
                    value={this.state.valorCursoComplementar}
                  <option>
                      Curso Técnico
                  </option>
                  <option>
                      Curso de Inglês
                  </option>
                  <option>
                       Não fiz curso complementar
                  </option>
              </select>
          </Container8 >
        </form>
        <button onClick={this.props.trocaDePagina}>Próxima Etapa</button>
      </div>
    );
  }
}
