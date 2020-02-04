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

const Search = () => {
  return (
    <SearchWrap>
      <Input placeholder="Search Movie. ex) code" />
    </SearchWrap>
  );
};

export default Search;
