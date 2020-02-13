import React from "react";
import styled from "styled-components";

const WrapperContent = styled.div`
  min-height 600px;
  @media all and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export default ({ children }) => <WrapperContent>{children}</WrapperContent>;
