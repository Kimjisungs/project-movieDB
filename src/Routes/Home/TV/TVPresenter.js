import React from "react";
import WrapperContent from "../../../Components/WrapperContent";
import Section from "../../../Components/Section";
import Loader from "../../../Components/Loader";
import Poster from "../../../Components/Poster";
import Message from "../../../Components/Message";
import PropTypes from "prop-types";

const TVPresenter = ({
  loading,
  error,
  popResults,
  topResults,
  onAirResults
}) => (
  <WrapperContent>
    {loading ? (
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
                isMovie="tv"
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
                isMovie="tv"
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
                isMovie="tv"
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} />}
      </>
    )}
  </WrapperContent>
);

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popResults: PropTypes.array,
  topResults: PropTypes.array,
  onAirResults: PropTypes.array
};

export default TVPresenter;
