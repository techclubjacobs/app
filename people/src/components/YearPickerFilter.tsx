import React, { Component } from "react";

interface IProps {
    years: number[];
}

class YearPickerFilter extends Component<IProps, {}> {
  public render() {
    return (
        <div>
            year picker filter
        </div>
    );
  }
}

export default YearPickerFilter;
