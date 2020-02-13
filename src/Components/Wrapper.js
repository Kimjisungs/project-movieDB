import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 10px 100px;
  @media all and (max-width: 1024px) {
    padding: 0 0 50px;
  }
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media all and (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
`;

export default ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
