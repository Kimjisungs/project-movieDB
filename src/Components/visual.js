import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled.div`
  position: relative;
  height: 420px;
  width: 100%;
  background-image: url(${({ bgUrl }) => bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media all and (max-width: 1024px) {
    height: 260px;
  }
`;

const Title = styled.h3`
  position: absolute;
  top: 60px;
  left: 60px;
  font-family: Georgia;
  font-size: 4rem;
  color: #fff;
  text-shadow: 2px 4px 9px rgba(0, 0, 0, 0.6);
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media all and (max-width: 1024px) {
    top: 30px;
    left: 30px;
    font-size: 2rem;
  }
`;

export default ({ key, id, title, image, isDetail }) => (
  <Link to={`/${isDetail}?id=${id}`}>
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
