import React, { Component } from "react";
import GridCard from "./components/GridCard";
import ListCard from "./components/ListCard";
import SearchBar from "./components/SearchBar";
import { AppWrapper } from "./styles/get-started-components";

class App extends Component<{}, {}> {
  public render() {
    return (
      <AppWrapper>
        <div style={{ width: "50%", margin: "0 auto" }}>
          <SearchBar></SearchBar>
        </div>

        <div>
          <GridCard />
          <br />
          <ListCard />
        </div>
      </AppWrapper>
    );
  }
}

export default App;
