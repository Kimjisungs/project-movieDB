import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh);
  margin-top: -152px;
  padding-top: 152px;
  padding-bottom: 200px;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7)
`;

const Content = styled.div`
  z-index: 10;
  position: relative;
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding-top: 70px;
`;

const Text = styled.div`
  padding: 0 100px;
  text-align: center;
  color: #dfdfdf;
`;

const Title = styled.h3`
  font-size: 5rem;
`;

const Date = styled.p`
  margin-top: 20px;
  font-size: 2rem;
`;

const Description = styled.p`
  margin-top: 60px;
  font-size: 2rem;
  line-height: 1.4;
`;

const DetailPresenter = ({ loading, error, results }) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      {results && (
        <Wrapper
          bgImg={
            results.backdrop_path
              ? `https://image.tmdb.org/t/p/original${results.backdrop_path}`
              : results.profile_path
              ? `https://image.tmdb.org/t/p/original${results.profile_path}`
              : require("../../assets/images/no_poster.jpg")
          }
        >
          <Content>
            <Text>
              <Title>{results.name}</Title>
              <Date>
                {(results.first_air_date && results.first_air_date) || 2010}
              </Date>
              <Description>{results.overview}</Description>
            </Text>
          </Content>
        </Wrapper>
      )}
    </>
  );
};

export default DetailPresenter;
