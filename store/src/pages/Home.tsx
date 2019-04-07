import React, { Component } from "react";

class HomePage extends Component<{}, {}> {
  public render() {
    return (
      <div>
        <a href="/buy">Go to buy page</a><br/>
        <a href="/sell">Go to sell page</a><br/>
        <a href="/chat">Go to chat page</a>
      </div>
    );
  }
}

export default HomePage;