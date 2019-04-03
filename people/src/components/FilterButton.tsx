import React, { Component } from "react";

type Props = {
    title: string;
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

class FilterButton extends Component<Props, {}> {

    state = {
        show: false
    };

    buttonclick() {
        this.setState({
            ...this.state,
            show: !this.state.show
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