import React from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL, headers } from "./BASE_API";
import MusicaCard from "./MusicaCard";

const InputContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 20px;
  position: relative;
  left: 50px;
  bottom: 100px ;
  background-color: magenta;
  border: 5px solid cyan;
  width: 90%;
  color: white;
  border-radius: 20px;

  button{
    position: relative;
    left: 150px;
    border-radius: 20px;
    border: 2px solid white;
    width: 100px;
    color: white;
    background-color: magenta;

  }

  input{
    position: relative;
    left: 150px;
    border: 2px solid cyan;
    width: 150px;
    
  }

  p{
    position: relative;
    left: 150px;

  }
  
  
`;

class GerenciarMusica extends React.Component {
  state = {
    musicas: [],
    nomeMusica: "",
    nomeArtista: "",
    url: "",
  };

  componentDidMount = () => {
    this.getMusicaByPlaylist(this.props.playlistId);
  };

  onChangeInputValues = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getMusicaByPlaylist = (playlistId) => {
    axios.get(`${BASE_URL}/${playlistId}/tracks`, headers).then((res) => {
      this.setState({ musicas: res.data.result.tracks });
    });
  };

  onClickAddMusica = (playlistId) => {
    const body = {
      name: this.state.nomeMusica,
      artist: this.state.nomeArtista,
      url: this.state.url,
    };
    axios
      .post(`${BASE_URL}/${playlistId}/tracks`, body, headers)
      .then((res) => {
        alert("Música adicionada com sucesso!");
        this.setState({ nomeMusica: "", nomeArtista: "", url: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onClickDelMusica = (playlistId, trackId) => {
    axios
      .delete(`${BASE_URL}/${playlistId}/tracks/${trackId}`, headers)
      .then((res) => {
        alert("Música deletada com sucesso!")
        this.getMusicaByPlaylist(this.props.playlistId);
      })
      .catch((err) => {
        alert("Ops, ocorreum um erro, tente novamente!");
      });
  };

  render() {
    const musicas = this.state.musicas.map((musica) => {
      return (
        <MusicaCard
          key={musica.id}
          playlistId={this.props.playlistId}
          musicaId={musica.id}
          name={musica.name}
          artista={musica.artist}
          url={musica.url}
          deleteMusica={this.onClickDelMusica}
        />
      );
    });

    return (
      <InputContainer>
        <p>Nome:</p>
        <input
          value={this.state.nomeMusica}
          onChange={this.onChangeInputValues}
          placeholder="nome da música"
          name="nomeMusica"
        />
        <p>Artista:</p>
        <input
          value={this.state.nomeArtista}
          onChange={this.onChangeInputValues}
          placeholder="nome do artista"
          name="nomeArtista"
        />
        <p>URL:</p>
        <input
          value={this.state.url}
          onChange={this.onChangeInputValues}
          placeholder="url da música"
          name="url"
        />
        <div>
          <button onClick={() => this.onClickAddMusica(this.props.playlistId)}>
            Adicionar Música
          </button>
        </div>
        <div>{musicas}</div>
      </InputContainer>
    );
  }
}

export default GerenciarMusica;
