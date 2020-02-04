import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 10px 100px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1200px;
`;

export default ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
