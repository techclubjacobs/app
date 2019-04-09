import React, { Component } from "react";

interface IProps {
    title: string;
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

class FilterButton extends Component<IProps, {}> {

    public state = {
        show: false,
    };

    public buttonclick() {
        this.setState({
            ...this.state,
            show: !this.state.show,
        });
    }

    public render() {
        return (
            <div style={divStyle}>
                <button style={buttonStyle} onClick={this.buttonclick.bind(this)}>
                    {this.props.title}
                </button>
                {this.state.show && this.props.children}
            </div>
        );
    }
}

export default FilterButton;
