import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getQuery } from "../../Redux/Action";
import SearchPresenter from "./SearchPresenter";
import qs from "query-string";

class SearchContainer extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const { query: searchQuery, history } = this.props;
    if (searchQuery !== "") history.push(`/search?query=${searchQuery}`);
  };

  uriQuery = () => {
    const {
      location: { search }
    } = this.props;
    const { query: uriQuery } = qs.parse(search);
    return uriQuery;
  };

  render() {
    const { query } = this.props;
    return (
      <SearchPresenter
        handleSubmit={this.handleSubmit}
        updateQuery={this.updateQuery}
        searchQuery={query}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.search.query
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getQuery
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
);
