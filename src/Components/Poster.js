import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PosterWrap = styled.li`
  width: 20%;
  padding: 0 10px;
`;

const Img = styled.div`
  height: 320px;
  overflow: hidden;
  img {
    width: 100%;
  }
  transition: opacity 0.3s linear;
`;

const Text = styled.div`
  margin-top: 10px;
  color: #dfdfdf;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  overflow: hidden;
  white-space: normal;
  height: 1.2em;
  line-height: 1.2;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Date = styled.p`
  margin-top: 10px;
`;

const Desc = styled.p`
  margin-top: 10px;
  overflow: hidden;
  white-space: normal;
  line-height: 1.2;
  height: 3.6em;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 300;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  opacity: 0.6;
`;

const Links = styled(Link)`
  &:hover,
  &:focus {
    ${Img} {
      opacity: 0.4;
    }
    ${Desc} {
      text-decoration: underline;
    }
  }
`;

export default ({ id, title, image, date, overview, isMovie }) => (
  <PosterWrap>
    <Links
      to={
        isMovie === "tv"
          ? `/tvDetail?id=${id}`
          : isMovie === "movie"
          ? `/movieDetail?id=${id}`
          : `/peopleDetail?id=${id}`
      }
    >
      <Img>
        <img
          src={
            image
              ? `https://image.tmdb.org/t/p/w500${image}`
              : require("../assets/images/no_poster.jpg")
          }
          alt={title}
        />
      </Img>
      <Text>
        <Title>{title}</Title>
        <Date>{date && date.substring(0, 4)}</Date>
        <Desc>{overview}</Desc>
      </Text>
    </Links>
  </PosterWrap>
);
