import React, { Component } from "react";

class HomePage extends Component<{}, {}> {
  public render() {
    return (
      <div>
        <a href="/buy">Go to buy page</a>
        <a href="/sell">Go to sell page</a>
      </div>
    );
  }
}

export default HomePage;
