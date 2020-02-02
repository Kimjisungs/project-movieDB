import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.h3`
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 2rem;
  color: #fff;
`;

export default ({ key, id, title, image }) => (
  <Link>
    <Item
      bgUrl={
        image
          ? `https://image.tmdb.org/t/p/original${image}`
          : require("../assets/images/no_image.jpg")
      }
    >
      <Title>{title}</Title>
    </Item>
  </Link>
);
