import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 0 -10px;
  margin-bottom: 30px;
  :not(:nth-of-type(1)) {
    margin-top: 30px;
  }
`;

const Title = styled.h2`
  padding: 30px;
  font-size: 1.75rem;
  color: #dfdfdf;
  @media all and (max-width: 1024px) {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

const Layout = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export default ({ title = "", children }) => (
  <Section>
    <Title>{title}</Title>
    <Layout>{children}</Layout>
  </Section>
);
