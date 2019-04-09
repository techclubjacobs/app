import React, { Component } from "react";

interface IProps {
    default: string;
    alternative: string;
}

const divStyle = {
    display: "inline",
};

const buttonStyle = {
    border: "1px solid black",
    display: "inline",
    margin: 10,
    padding: 5,
};

class BinaryFilterButton extends Component<IProps, {}> {

    public state = {
        clicked: false,
    };

    public buttonclick() {
        this.setState({
            ...this.state,
            clicked: !this.state.clicked,
        });
    }

    public render() {
        return (
            <div style={divStyle}>
                <button style={buttonStyle} onClick={this.buttonclick.bind(this)}>
                    {this.state.clicked ? this.props.alternative : this.props.default}
                </button>
            </div>
        );
    }
}

export default BinaryFilterButton;
