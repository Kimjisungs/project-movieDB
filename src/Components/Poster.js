import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const PosterWrap = styled.li`
  width: 20%;
  padding: 0 10px;
  @media all and (max-width: 1024px) {
    width: 25%;
  }
  @media all and (max-width: 768px) {
    width: 33.333%;
  }
  @media all and (max-width: 540px) {
    width: 50%;
  }
`;

const Img = styled.div`
  height: 320px;
  overflow: hidden;
  img {
    width: 100%;
  }
  transition: opacity 0.3s linear;
  @media all and (max-width: 1024px) {
    height: auto;
  }
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

const Poster = ({
  id,
  title,
  image,
  date,
  overview,
  isMovie,
  queryFromRedux
}) => (
  <PosterWrap>
    <Links
      to={
        isMovie === "tv"
          ? `/tvDetail?${
              queryFromRedux ? `query=${queryFromRedux}&` : ""
            }id=${id}`
          : isMovie === "movie"
          ? `/movieDetail?${
              queryFromRedux ? `query=${queryFromRedux}&` : ""
            }id=${id}`
          : `/peopleDetail?${
              queryFromRedux ? `query=${queryFromRedux}&` : ""
            }id=${id}`
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

const mapStateToProps = state => {
  return {
    queryFromRedux: state.search.query
  };
};

export default connect(mapStateToProps)(Poster);
