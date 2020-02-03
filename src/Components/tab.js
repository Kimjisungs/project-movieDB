import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import uuidv4 from "uuid/v4";

const List = styled.ul`
  border-left: 0;
`;

const Item = styled.li``;

const Links = styled(Link)`
  display: block;
  padding: 40px 40px;
  ${props =>
    props.activeCheck ? props.activeStyle.visible : props.activeStyle.hidden};
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
          <Item key={uuidv4()}>
            <Links
              to={itemPathname}
              activeCheck={pathname === itemPathname}
              activeStyle={activeStyle}
            >
              {text}
            </Links>
          </Item>
        );
      })}
    </List>
  );
});
