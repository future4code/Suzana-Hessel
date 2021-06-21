import React from "react";
import styled from "styled-components";

const MusicCardContainer = styled.div`
  margin: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  audio {
    display: flex;
    position: relative;
    top: 180px;
    right: 400px;
    
  }

  div {
    display: flex;
    align-items: center;
    position: relative;
    top: 180px;
    right: 390px;
    
  }
`;

const MusicContainer = styled.h4`
  margin: 10px;
  color:  magenta;
  
`;

const ArtistContainer = styled.p`
  margin-right: 10px;
  
`;

const DeleteButton = styled.p`
  
  color: red;
  cursor: pointer;
  
  
`;

class MusicaCard extends React.Component {
  render() {
    return (
      <MusicCardContainer>
        <div>
          <MusicContainer>{this.props.name} - </MusicContainer>
          <ArtistContainer>{this.props.artist}</ArtistContainer>
          <DeleteButton
            onClick={() =>
              this.props.deleteMusica(this.props.playlistId, this.props.musicaId)
            }
          >
            X
          </DeleteButton>
        </div>
        <audio controls="controls">
          <source src={this.props.url} type="audio/ogg" />
        </audio>
      </MusicCardContainer>
    );
  }
}

export default MusicaCard;
