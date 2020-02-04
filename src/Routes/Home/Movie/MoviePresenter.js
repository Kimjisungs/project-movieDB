import React from "react";
import Section from "../../../Components/Section";
import Loader from "../../../Components/Loader";
import Poster from "../../../Components/Poster";

const TVPresenter = ({
  loading,
  error,
  nowResults,
  popResults,
  topResults
}) => {
  return loading ? (
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
    </>
  );
};

export default TVPresenter;
