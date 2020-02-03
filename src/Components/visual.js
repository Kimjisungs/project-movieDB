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
  font-size: 4rem;
  color: #fff;
  text-shadow: 2px 4px 9px rgba(0, 0, 0, 0.6);
`;

export default ({ key, id, title, image }) => (
  <Link to="/home/visual/:id">
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
