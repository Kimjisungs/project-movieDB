import React from "react";
import Section from "../../../Components/Section";
import Loader from "../../../Components/Loader";
import Poster from "../../../Components/Poster";

const TVPresenter = ({
  loading,
  error,
  popResults,
  topResults,
  onAirResults
}) => {
  return loading ? (
    <Loader />
  ) : (
    <>
      {popResults && popResults.length > 0 && (
        <Section title="Popular">
          {popResults.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.name}
              image={movie.poster_path}
              date={movie.first_air_date}
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
              title={movie.name}
              image={movie.poster_path}
              date={movie.first_air_date}
              overview={movie.overview}
            />
          ))}
        </Section>
      )}
      {onAirResults && onAirResults.length > 0 && (
        <Section title="On The Air">
          {onAirResults.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.name}
              image={movie.poster_path}
              date={movie.first_air_date}
              overview={movie.overview}
            />
          ))}
        </Section>
      )}
    </>
  );
};

export default TVPresenter;
