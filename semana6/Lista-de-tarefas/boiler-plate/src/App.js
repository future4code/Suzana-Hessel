import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
  
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  cursor: pointer;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Texto da primeira tarefa',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'Texto segunda tarefa',
          completa: true
        }
       
      ],

      inputValue: "",
      filtro: " "

    }

  componentDidUpdate() {
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))

  };

  componentDidMount() {
    const tarefasSalvas = localStorage.getItem('tarefas') 
    const arrayTarefas = JSON.parse(tarefasSalvas)
    if(arrayTarefas) {
      this.setState({tarefas: arrayTarefas})

  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})

  }

  criaTarefa = () => {

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    this.setState({tarefas: [...this.state.tarefas, novaTarefa]})
    
  }

  selectTarefa = (id) => {
   
    const escolhaTarefa = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id){
        const tarefaEscolhida = {
          ...tarefa, 
          completa: tarefa.completa
        }
        console.log(tarefaEscolhida)
        return tarefaEscolhida
      }
    })

  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})

  }

  render() {
    
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          console.log(false)
          return !tarefa.completa
        case 'completas':
          console.log(true)
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>
        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            console.log(tarefa.completa)
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
