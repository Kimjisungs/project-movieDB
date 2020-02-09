import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh + 152px);
  margin-top: -152px;
  padding-top: 152px;
  ${props => props.bgImg};
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
  padding-top: 60px;
`;

const Text = styled.div`
  padding: 0 100px;
  text-align: center;
  color: #dfdfdf;
`;

const Title = styled.h3`
  font-size: 4rem;
`;

const Date = styled.p``;

const Description = styled.p``;

const DetailPresenter = ({ loading, error, results }) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      {console.log(results)}
      {results && (
        <Wrapper
          bgImg={
            results.backdrop_path
              ? `background-image: url(https://image.tmdb.org/t/p/original${results.poster_path})`
              : `background-color: #081c24`
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
