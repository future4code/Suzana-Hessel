import React from 'react';
import axios from 'axios';




const url =  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const headers = {
  headers:  {
    Authorization: "suzana-hessel-molina"
  }
 }

export default class App extends React.Component {
 state = {

   playlist: [],
   inputPlaylist: ""
   
 }

 

 onChangeInputPlaylist = (event) =>{
   this.setState({ inputPlaylist: event.target.value})
 }

 guardarPlaylist = () => {
   axios
   .get(url, headers)
   .then((res) => {
     this.setState({ playlist: res.data.result.list})
   })
 }

 criarPlaylist = () => {
   const body = {
     name: this.state.inputPlaylist
   };
   axios
   .post(url, body, headers)
   .then((res) => {
     alert("Playlist cadastrada com sucesso!");
     this.setState({ inputPlaylist: ""});
     this.pegarPlaylist();
   })
 }


  render () {

    return (
      <div >
        <div>
          < h1>Labefy</h1>
        </div>
        <label>
          <h3>Lista de Playlist</h3>
          <input 
          value={this.state.inputPlaylist}
          onChange={this.onChangeInputPlaylist}
          />
          <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </label>

        
      </div>
    );
  }

  }

