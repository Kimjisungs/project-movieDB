import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { getQuery } from "../Redux/Action";
import { connect } from "react-redux";

const SearchWrap = styled.div`
  width: 60%;
  height: 70px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  font-size: 1.75rem;
  background-color: transparent;
  border: 4px solid #dfdfdf;
  color: #fff;
`;

const Search = () => {
  return (
    <SearchWrap>
      <Input placeholder="Search Movie. ex) code" />
    </SearchWrap>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
