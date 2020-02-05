import React from "react";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Loader from "../../Components/Loader";

const SearchPresenter = ({ loading, error, tvResults }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
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
                />
              ))}
            </Section>
          )}
        </>
      )}
    </>
  );
};

export default SearchPresenter;
