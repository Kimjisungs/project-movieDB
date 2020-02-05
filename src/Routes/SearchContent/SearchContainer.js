import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvApi } from "../../api";
import { connect } from "react-redux";
import qs from "query-string";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      tvResults: null
    };
  }

  uriQuery = () => {
    const {
      location: { search }
    } = this.props;
    const { query: uriQuery } = qs.parse(search);
    return uriQuery;
  };

  getApi = async query => {
    try {
      const {
        data: { results: tvResults }
      } = await tvApi.searchTv(query);
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

  componentDidMount() {
    this.getApi(this.uriQuery());
  }

  render() {
    const { loading, error, tvResults } = this.state;
    return (
      <>
        <SearchPresenter
          loading={loading}
          error={error}
          tvResults={tvResults}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.search.query
  };
};

export default connect(mapStateToProps)(SearchContainer);
