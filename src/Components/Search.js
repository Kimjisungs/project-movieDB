import React from "react";
import styled from "styled-components";

const Search = styled.div`
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

export default () => (
  <Search>
    <Input placeholder="Search Movie" />
  </Search>
);
