import React from "react";
import styled from "styled-components";

const WrapperContent = styled.div`
  min-height 600px;
`;

export default ({ children }) => <WrapperContent>{children}</WrapperContent>;
