import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import uuidv4 from "uuid/v4";

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
        <Item key={uuidv4()}>
          <Links to={item.pathname}>{item.text}</Links>
        </Item>
      ))}
    </List>
  );
};
