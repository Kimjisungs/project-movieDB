import React from "react";
import SearchPresenter from "./SearchPresenter";
import { connect } from "react-redux";

class SearchContainer extends React.Component {
  render() {
    return (
      <>
        <SearchPresenter />
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
