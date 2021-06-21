import React from "react";
import { BASE_URL, headers } from "./componentes/BASE_API";
import axios from "axios";
import styled from "styled-components";
import GerenciarMusica from "./componentes/GerenciarMusica";
import GerenciarPlaylist from "./componentes/GerenciarPlaylist";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    border-radius: 20px;
    border: 2px solid white;
    width: 100px;
    color: white;
    background-color: magenta;
    cursor: pointer;
    
  }
  input {
    border: 2px solid cyan;
    width: 190px;
  }

  h1 {
    position: relative;
    right: 650px;
    color: magenta;
  }
`;

const CriaPlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50px;
  background-color: magenta;
  border: 5px solid cyan;
  width: 98%;
  color: white;
  border-radius: 20px;

  h2 {
    position: relative;
    left: 25px;
    padding-bottom: 50px;
    color: white;

  button {
    position: relative;
    left: 5px;
    cursor: pointer;
  }

}
`;

const ButtonVoltar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50px;
  gap: 100px;

  button {
    border-radius: 20px;
    border: 2px solid cyan;
    width: 100px;
    color: white;
    background-color: magenta;
    cursor: pointer;
  }
  
`;

export default class App extends React.Component {
  state = {
    playlists: [],
    inputPlaylist: "",
    trocaTela: false,
    playlistId: "",
  };

  componentDidMount() {
    this.guardarPlaylist();
  }

  onChangeInputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value });
  };

  guardarPlaylist = () => {
    axios
      .get(`${BASE_URL}`, headers)
      .then((res) => {
        console.log(res);
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist,
    };
    axios
      .post(`${BASE_URL}`, body, headers)
      .then((res) => {
        alert("Playlist cadastrada com sucesso!");
        this.setState({ inputPlaylist: "" });
        this.guardarPlaylist();
      })
      .catch((err) => {
        alert("Ops! Ocorreu um erro, tente novamente");
      });
  };

  onClickTrocaTela = (id) => {
    console.log("ID DA PLAYLIST", id);
    this.setState({ trocaTela: !this.state.trocaTela, playlistId: id });
  };

  render() {
    const componentesPlaylist = this.state.playlists.map((playlist) => {
      return (
        <div>
          <GerenciarPlaylist
            key={playlist.id}
            name={playlist.name}
            playlistId={playlist.id}
            deletePlaylist={this.deletePlaylist}
            trocaTela={this.onClickTrocaTela}
          />
        </div>
      );
    });

    return (
      <AppContainer>
        <div>
          <h1>Labefy</h1>
        </div>
        {this.state.trocaTela ? (
          <ButtonVoltar>
            <button onClick={this.onClickTrocaTela}>
              Voltar para Playlists
            </button>
            <div>
              <GerenciarMusica playlistId={this.state.playlistId} />
            </div>
          </ButtonVoltar>
        ) : (
          <CriaPlay>
            <label>
              <h2>Lista de Playlists</h2>
              <input
                value={this.state.inputPlaylist}
                onChange={this.onChangeInputPlaylist}
              />
              <button onClick={this.criarPlaylist}>Criar Playlist</button>
            </label>
            {componentesPlaylist}
          </CriaPlay>
        )}
      </AppContainer>
    );
  }
}
