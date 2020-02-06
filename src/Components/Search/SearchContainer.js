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

  updateSearchQueryToRedux = ({ target }) => this.props.getQuery(target.value);

  updateUriQueryToRedux = () => {
    const nowUriQuery = this.uriQuery();
    this.props.getQuery(nowUriQuery);
  };

  matchUriAndSearchQuery = prevProps => {
    const {
      location: { search }
    } = prevProps;

    const { query: prevUriQuery } = qs.parse(search);
    const nowUriQuery = this.uriQuery();

    if (prevUriQuery !== nowUriQuery) this.updateUriQueryToRedux();
  };

  componentDidMount() {
    this.updateUriQueryToRedux();
  }

  componentDidUpdate(prevProps) {
    this.matchUriAndSearchQuery(prevProps);
  }

  render() {
    const { queryFromRedux: searchQuery } = this.props;

    return (
      <SearchPresenter
        handleSubmit={this.handleSubmit}
        updateQuery={this.updateSearchQueryToRedux}
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
