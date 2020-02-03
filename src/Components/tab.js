import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import uuidv4 from "uuid/v4";

const List = styled.ul`
  border-left: 0;
`;

const Item = styled.li`
  ${props =>
    props.active ? props.activeStyle.visible : props.activeStyle.hidden}
`;

const Links = styled(Link)`
  display: block;
  padding: 30px 20px;
  text-align: center;
  color: #fff;
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
