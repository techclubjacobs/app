import React, { Component } from "react";

type Props = {
    years: number[];
}

class YearPickerFilter extends Component<Props, {}> {
  public render() {
    return (
        <div>
            year picker filter
        </div>
    );
  }
}

export default YearPickerFilter;
