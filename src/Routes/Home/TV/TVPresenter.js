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
          {popResults.map(tv => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.name}
              image={tv.poster_path}
              date={tv.first_air_date}
              overview={tv.overview}
            />
          ))}
        </Section>
      )}
      {topResults && topResults.length > 0 && (
        <Section title="Tob Rated">
          {topResults.map(tv => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.name}
              image={tv.poster_path}
              date={tv.first_air_date}
              overview={tv.overview}
            />
          ))}
        </Section>
      )}
      {onAirResults && onAirResults.length > 0 && (
        <Section title="On The Air">
          {onAirResults.map(tv => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.name}
              image={tv.poster_path}
              date={tv.first_air_date}
              overview={tv.overview}
            />
          ))}
        </Section>
      )}
    </>
  );
};

export default TVPresenter;
