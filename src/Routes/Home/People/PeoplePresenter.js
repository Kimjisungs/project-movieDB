import React from "react";
import WrapperContent from "../../../Components/WrapperContent";
import Section from "../../../Components/Section";
import Loader from "../../../Components/Loader";
import Poster from "../../../Components/Poster";
import Message from "../../../Components/Message";
import PropTypes from "prop-types";

const PeoplePresenter = ({ loading, error, popResults }) => (
  <WrapperContent>
    {loading ? (
      <Loader />
    ) : (
      <>
        {console.log(popResults)}
        {popResults && popResults.length > 0 && (
          <Section title="Popular">
            {popResults.map(person => (
              <Poster
                key={person.id}
                id={person.id}
                title={person.name}
                image={person.known_for[0].poster_path}
                date={
                  person.known_for[0].first_air_date ||
                  person.known_for[1].release_date
                }
                overview={person.known_for[0].overview}
              />
            ))}
          </Section>
        )}
        {error && <Message text={error} />}
      </>
    )}
  </WrapperContent>
);

PeoplePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popResults: PropTypes.array
};

export default PeoplePresenter;
