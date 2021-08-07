import React from "react";
import Router from "./routes/Router";
import GlobalState from "./Global/GlobalState";
import styled from "styled-components";

const AppContainer = styled.div`
  display: block;
  width: 100%;
  height: 90vh;
`;

const App = () => {
  return (
    <GlobalState>
      <AppContainer>
        <Router />
      </AppContainer>
    </GlobalState>
  );
};

export default App;
