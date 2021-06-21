import React from "react";
import axios from "axios";
import { BASE_URL, headers } from "./BASE_API";
import styled from "styled-components";

const ContainerPlay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px
`;

const DeleteButton = styled.div`
  cursor: pointer;
  color: red;
  display: flex;
  border-radius: 20px;
    
`;

const NameContainer = styled.div`
  display: flex;
  padding-bottom: 50px;
  padding-top: 50px;

`;

export default class GerenciarPlaylist extends React.Component {
  onClickDelPlaylist = (playlistId) => {
    axios
      .delete(`${BASE_URL}/${playlistId}`, headers)
      .then((res) => {
        alert("Playlist deletada com sucesso!");
      })
      .catch((err) => {
        alert("Ops, ocorreu um erro, tente novamente!");
      });
    console.log(axios);
  };

  render() {
    return (
      <ContainerPlay>
        <NameContainer>{this.props.name}</NameContainer>
        <button onClick={() => this.props.trocaTela(this.props.playlistId)}>
          Ver Músicas
        </button>
        <DeleteButton
          onClick={() => this.onClickDelPlaylist(this.props.playlistId)}
        >
          X
        </DeleteButton>
      </ContainerPlay>
    );
  }
}
