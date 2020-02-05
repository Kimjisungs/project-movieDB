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

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = props => event => {
    event.preventDefault();
    if (props.query !== "") props.history.push(`/search?query=${props.query}`);
  };

  updateQuery = props => ({ target }) => {
    props.getQuery(target.value);
  };

  render() {
    return (
      <SearchWrap>
        <Form onSubmit={this.handleSubmit(this.props)}>
          <Input
            placeholder="Search Movie. ex) code"
            onChange={this.updateQuery(this.props)}
            value={this.props.query}
          />
        </Form>
      </SearchWrap>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
