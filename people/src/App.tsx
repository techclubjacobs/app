import React, { Component } from "react";
import GridCard from "./components/GridCard";
import SearchBar from "./components/SearchBar";
import { AppWrapper } from "./styles/get-started-components";
import ListCardView from "./components/ListCardView/ListCardView";

class App extends Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <div style={{ width: "50%", margin: "0 auto" }}>
          <SearchBar></SearchBar>
        </div>
        <ListCardView />
      </React.Fragment>
    );
  }
}

export default App;
