import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
// import Etapa3 from "./components/Etapa3";
// import Final from "./components/Final";
import './App.css';

export default class App extends React.Component {
  state = {
    pagina: "Etapa1"
   
  }

  trocaDePagina = () => {
    if (this.state.pagina === "Etapa1"){
      this.setState({ pagina: "Etapa2"})
    }else if(this.state.pagina === "Etapa2"){
      this.setState({ pagina: "Etapa1"})
    }
  
  }

  render() {
    const renderizaPagina = () => {
      if (this.state.pagina === "Etapa1") {
        return <Etapa1 trocaDePagina={this.trocaDePagina} />;
      } else if (this.state.pagina === "Etapa2") {
        return <Etapa2 trocaDePagina={this.trocaDePagina} />;
      }
    };

    return <div className="App">{renderizaPagina()}</div>;
  }
  

}




