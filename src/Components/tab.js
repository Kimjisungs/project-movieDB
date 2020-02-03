import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import uuidv4 from "uuid/v4";

const List = styled.ul`
  border-left: 0;
`;

const Item = styled.li`
  ${props =>
    props.activeCheck ? props.activeStyle.visible : props.activeStyle.hidden}
`;

const Links = styled(Link)`
  display: block;
  padding: 30px 20px;
  text-align: center;
  color: #fff;
`;

export default withRouter(props => {
  const {
    to,
    activeStyle,
    location: { pathname }
  } = props;
  return (
    <List>
      {to.map(item => {
        const { pathname: itemPathname, text } = item;

        return (
          <Item
            key={uuidv4()}
            activeCheck={pathname === itemPathname}
            activeStyle={activeStyle}
          >
            <Links to={itemPathname}>{text}</Links>
          </Item>
        );
      })}
    </List>
  );
});
