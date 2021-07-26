import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components"
import Header from "./components/Header";
import Router from "./routes/Router"

const ContainerApp = styled.div`
width: 100%;
height: 100vh;
background-color: white;


`

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ContainerApp>
      <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
     <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
     </BrowserRouter>
    </ContainerApp>
  );
}

export default App;
