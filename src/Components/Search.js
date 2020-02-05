import React from "react";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { getQuery } from "../Redux/Action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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

const Form = styled.form`
  height: 100%;
`;

const handleSubmit = props => event => {
  event.preventDefault();
  if (props.query !== "") props.history.push(`/search?query=${props.query}`);
};

const updateQuery = props => ({ target }) => {
  props.getQuery(target.value);
};

const Search = props => {
  return (
    <SearchWrap>
      <Form onSubmit={handleSubmit(props)}>
        <Input
          placeholder="Search Movie. ex) code"
          onChange={updateQuery(props)}
          value={props.query}
        />
      </Form>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
