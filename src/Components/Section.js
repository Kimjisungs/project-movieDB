import React from "react";
import styled from "styled-components";

const Section = styled.section``;

const Title = styled.h2``;

const Layout = styled.div``;

export default ({ title = "", children }) => (
  <Section>
    <Title>{title}</Title>
    <Layout>{children}</Layout>
  </Section>
);
