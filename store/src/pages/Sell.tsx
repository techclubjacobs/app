import React, { Component } from "react";
import CreateView from "../components/CreateView";
import DetailView from "../components/DetailView";
import GridView from "../components/GridView";

class SellPage extends Component<{}, {}> {
    public render() {
        return (
            <div>
                <b>Here is the sell page</b>
                <CreateView></CreateView>
                <GridView></GridView>
                <DetailView></DetailView>
            </div>
        );
    }
}

export default SellPage;
