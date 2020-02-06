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
    const { queryFromRedux: searchQuery, history } = this.props;
    if (searchQuery !== "") history.push(`/search?query=${searchQuery}`);
  };

  uriQuery = () => {
    const {
      location: { search }
    } = this.props;
    const { query: uriQuery } = qs.parse(search);
    return uriQuery;
  };

  updateQueryToRedux = (() => {
    const { getQuery } = this.props;

    return {
      search: ({ target: { value } }) => getQuery(value),
      uri: () => {
        const nowUriQuery = this.uriQuery();
        getQuery(nowUriQuery);
      },
      empty: () => getQuery("")
    };
  })();

  matchUriAndSearchQuery = prevProps => {
    const {
      location: { search }
    } = prevProps;
    const { query: prevUriQuery } = qs.parse(search);
    const nowUriQuery = this.uriQuery();

    const {
      location: { pathname }
    } = this.props;

    if (prevUriQuery !== nowUriQuery) {
      pathname.includes("/home")
        ? this.updateQueryToRedux.empty()
        : this.updateQueryToRedux.uri();
    }
  };

  componentDidMount() {
    const nowUriQuery = this.uriQuery();
    nowUriQuery && this.updateQueryToRedux.uri();
  }

  componentDidUpdate(prevProps) {
    this.matchUriAndSearchQuery(prevProps);
  }

  render() {
    const { queryFromRedux: searchQuery } = this.props;

    return (
      <SearchPresenter
        handleSubmit={this.handleSubmit}
        updateQuery={this.updateQueryToRedux.search}
        searchQuery={searchQuery}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    queryFromRedux: state.search.query
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
