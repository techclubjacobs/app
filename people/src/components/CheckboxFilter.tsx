import React, { Component } from "react";

interface IProps {
    options: string[];
}

class CheckboxFilter extends Component<IProps, {}> {
  public render() {
    return (
        <div>
            checkbox filter
        </div>
    );
  }
}

export default CheckboxFilter;
