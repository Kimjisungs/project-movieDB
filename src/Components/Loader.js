import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  text-align: center;
`;

export default () => (
  <Loading>
    <img
      src="https://media.giphy.com/media/N256GFy1u6M6Y/giphy.gif"
      alt="loading"
    />
  </Loading>
);
