import React, { Component } from "react";
import logo from "./logo.svg";
import { AppHeader, AppLink, AppLogo, AppWrapper } from "./styles/get-started-components";
import { GlobalStyled } from "./styles/global";

class App extends Component<{}, {}> {
  public render() {
    return (
      <AppWrapper>
        <GlobalStyled/>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload
          </p>
          <AppLink
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
        </AppHeader>
      </AppWrapper>
    );
  }
}

export default App;
