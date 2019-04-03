import React, { Component } from "react";
import { Route } from 'react-router-dom';

import HomePage from './pages/Home';
import BuyPage from './pages/Buy';
import SellPage from './pages/Sell';

class App extends Component<{}, {}> {
    public render() {
        return (
            <div>
                <h1> Welcome to Jacobs Store</h1>

                <Route exact path="/" component={HomePage} />
                <Route path="/buy" component={BuyPage} />
                <Route path="/sell" component={SellPage} />
            </div>
        );
    }
}

export default App;