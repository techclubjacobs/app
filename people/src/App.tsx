import React, { Component } from "react";
import BinaryFilterButton from "./components/BinaryFilterButton";
import CheckboxFilter from "./components/CheckboxFilter";
import DropDownFilter from "./components/DropDownFilter";
import FilterButton from "./components/FilterButton";
import GridCard from "./components/GridCard";
import ListCard from "./components/ListCard";
import SearchBar from "./components/SearchBar";
import YearPickerFilter from "./components/YearPickerFilter";
import { AppWrapper } from "./styles/get-started-components";

class App extends Component<{}, {}> {
  public render() {
    return (
      <AppWrapper>
        <div style={{ width: "50%", margin: "0 auto" }}>
          <SearchBar></SearchBar>
        </div>

        <BinaryFilterButton default="active" alternative="inactive" />

        <FilterButton title="country">
          <DropDownFilter elements={["germany", "france", "spain", "portugal"]} />
        </FilterButton>

        <FilterButton title="year">
          <YearPickerFilter years={Array.from({length: (2021 - 2006)}, (v, k) => k + 2006)} />
        </FilterButton>

        <FilterButton title="role">
          <CheckboxFilter options={["student", "faculty", "staff"]} />
        </FilterButton>

        <FilterButton title="college">
          <CheckboxFilter options={["krupp", "merc", "c3", "nord"]} />
        </FilterButton>

        <div>
          <GridCard />
          <br />
          <ListCard />
        </div>
      </AppWrapper>
    );
  }
}

export default App;
