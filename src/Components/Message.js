import React from "react";
import styled from "styled-components";

const Message = styled.p`
  padding: 100px 0;
  font-size: 3rem;
  color: #fff;
  text-align: center;
`;

export default ({ text }) => <Message>{text}</Message>;
