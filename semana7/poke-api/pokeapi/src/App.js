import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerPokedex = styled.div``;

const ContainerPokemons = styled.div``;

export default class App extends React.Component {
  state = {
    pokemons: [],
    picture: "",
  };

  componentDidMount() {
    this.getPokemons()

  }

  getPokemons = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=161&offset=0");
    this.setState({ pokemons: response.data.results})
  };
  
  getPokeImagens = async (event) => {
    const url = event.target.value
    const response = await axios.get(`${url}`)
    this.setState({pokemons: response.data.sprites.front_default})
  }

  render() {
    const pokeList = this.state.pokemons.map((poke, i) => {
      return (
        <option key={poke.name} value={poke.id}>
          {poke.name}
        </option>
      );
    });

    return (
      <ContainerPokedex>
        <header>
          <h1>Pokedex</h1>
        </header>
        <ContainerPokemons>
          <h2>Quem é esse Pokemon?</h2>
          <select onChange={this.getPokeImagens}>
            <option>Selecione um pokemon</option>
            {pokeList}
          </select>
           {this.state.picture && 
           <img src={this.state.picture} alt="foto do pokemon"></img>
           }
          
        </ContainerPokemons>
      </ContainerPokedex>
    );
  }
}
