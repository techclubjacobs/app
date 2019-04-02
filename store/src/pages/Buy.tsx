import React, { Component } from "react";

import GridView from '../components/GridView';
import DetailView from '../components/DetailView';

class BuyPage extends Component<{}, {}> {
    public render() {
        return (
            <div>
                <b>Here is the buy page</b>
                <GridView></GridView>
                <DetailView></DetailView>
            </div>
        );
    }
}

export default BuyPage;