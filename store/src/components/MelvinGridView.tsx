import React, { Component } from "react";
import DemoGridElement from "./DemoGridElement";

class MelvinGridView extends Component<{}, {}> {
    public render() {
        return (
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>
                <DemoGridElement/>

            </div>
        );
    }
}

export default MelvinGridView;