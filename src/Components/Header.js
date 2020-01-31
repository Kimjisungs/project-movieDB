import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "Components/Search";

const Header = styled.header`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Logo = styled.h1`
  width: 100px;
  a {
    display: block;
  }
`;

const SearchWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

export default () => (
  <Header>
    <Logo>
      <Link to="/">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
          alt="logo"
        />
      </Link>
    </Logo>
    <SearchWrap>
      <Search />
    </SearchWrap>
  </Header>
);
