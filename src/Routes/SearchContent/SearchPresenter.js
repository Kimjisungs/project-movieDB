import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import WrapperContent from "../../Components/WrapperContent";

const SearchPresenter = ({
  loading,
  error,
  tvResults,
  movieResults,
  uriQuery
}) => {
  return (
    <>
      <Helmet>
        <title>{uriQuery} - Movie DB</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <WrapperContent>
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show">
              {tvResults.map(tv => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  title={tv.name}
                  image={tv.poster_path}
                  date={tv.first_air_date}
                  overview={tv.overview}
                  isMovie="tv"
                />
              ))}
            </Section>
          )}
          {movieResults && movieResults.length > 0 && (
            <Section title="Movies">
              {movieResults.map(movie => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={movie.poster_path}
                  date={movie.release_date}
                  overview={movie.overview}
                  isMovie="movie"
                />
              ))}
            </Section>
          )}
          {error && <Message text={error} />}
          {tvResults &&
            tvResults.length === 0 &&
            movieResults &&
            movieResults.length === 0 && <Message text="Not Found Results" />}
        </WrapperContent>
      )}
    </>
  );
};

SearchPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  tvResults: PropTypes.array,
  movieResults: PropTypes.array
};

export default SearchPresenter;
