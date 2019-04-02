import React, { Component } from "react";

type Props = {
    default: string;
    alternative: string;
}

const divStyle = {
    display: 'inline'
}

const buttonStyle = {
    padding: 5,
    margin: 10, 
    display: 'inline', 
    border: '1px solid black'
}

class BinaryFilterButton extends Component<Props, {}> {

    state = {
        clicked: false
    };

    buttonclick() {
        this.setState({
            ...this.state,
            clicked: !this.state.clicked
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