import React from "react";
import styled from "styled-components";

const Message = styled.p`
  font-size: 3rem;
`;

export default ({ text }) => <Message>{text}</Message>;
