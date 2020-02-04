import React from "react";
import WrapperContent from "../../../Components/WrapperContent";
import Section from "../../../Components/Section";
import Loader from "../../../Components/Loader";
import Poster from "../../../Components/Poster";
import Message from "../../../Components/Message";
import PropTypes from "prop-types";

const MoviePresenter = ({
  loading,
  error,
  nowResults,
  popResults,
  topResults
}) => (
  <WrapperContent>
    {loading ? (
      <Loader />
    ) : (
      <>
        {nowResults && nowResults.length > 0 && (
          <Section title="Now Playing">
            {nowResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.poster_path}
                date={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </Section>
        )}
        {popResults && popResults.length > 0 && (
          <Section title="Popular">
            {popResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.poster_path}
                date={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </Section>
        )}
        {topResults && topResults.length > 0 && (
          <Section title="Tob Rated">
            {topResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.poster_path}
                date={movie.release_date}
                overview={movie.overview}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} />}
      </>
    )}
  </WrapperContent>
);

MoviePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  nowResults: PropTypes.array,
  popResults: PropTypes.array,
  topResults: PropTypes.array
};

export default MoviePresenter;
