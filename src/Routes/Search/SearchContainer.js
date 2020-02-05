import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvApi } from "../../api";
import { connect } from "react-redux";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      tvResults: null
    };
  }

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

const mapStateToProps = state => {
  return {
    query: state.search.query
  };
};

export default connect(mapStateToProps)(SearchContainer);
