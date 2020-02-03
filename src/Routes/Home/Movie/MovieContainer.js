import React from "react";
import MoviePresenter from "./MoviePresenter";

class MovieContainer extends React.Component {
  state = {
    loading: null,
    error: null
  };

  componentDidMount() {}

  render() {
    return <MoviePresenter />;
  }
}

export default MovieContainer;
