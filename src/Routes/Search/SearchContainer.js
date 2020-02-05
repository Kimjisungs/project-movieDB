import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvApi } from "../../api";

class SearchContainer extends React.Component {
  state = {
    loading: true,
    error: null
  };

  componentDidMount() {}

  render() {
    return <SearchPresenter />;
  }
}

export default SearchContainer;
