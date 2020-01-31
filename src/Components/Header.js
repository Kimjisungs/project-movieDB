import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  padding: 10px;
`;

const Logo = styled.h1`
  width: 100px;
  a {
    display: block;
  }
`;

export default () => (
  <Header>
    <Logo>
      <Link to="/">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" />
      </Link>
    </Logo>
  </Header>
);
