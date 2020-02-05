import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvApi } from "../../api";

class SearchContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    tvResults: null
  };

  getSearchApi = async () => {
    try {
      const {
        data: { results: tvResults }
      } = await tvApi.searchTv("code");
      this.setState({
        tvResults
      });
    } catch {
      this.setState({
        error: "No Search Result"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  componentDidMount() {}

  render() {
    return <SearchPresenter />;
  }
}

export default SearchContainer;
