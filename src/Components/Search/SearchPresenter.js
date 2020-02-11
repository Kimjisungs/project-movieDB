import React from "react";
import styled from "styled-components";

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

const SearchPresenter = ({ handleSubmit, updateQuery, searchQuery }) => {
  return (
    <SearchWrap>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movie. ex) code, movie"
          onChange={updateQuery}
          value={searchQuery}
        />
      </Form>
    </SearchWrap>
  );
};

export default SearchPresenter;
