import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  flex-basis: 30%;
`;

const Links = styled(Link)`
  display: block;
  padding: 20px;
  background-color: #dfdfdf;
  text-align: center;
`;

export default props => {
  return (
    <List>
      {props.to.map(item => (
        <Item>
          <Links to={item.pathname}>{item.text}</Links>
        </Item>
      ))}
    </List>
  );
};
