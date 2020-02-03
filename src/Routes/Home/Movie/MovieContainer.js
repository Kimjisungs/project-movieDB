import React from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "../../../api";

class MovieContainer extends React.Component {
  state = {
    loading: null,
    error: null,
    popResults: null,
    topResults: null,
    onAirResults: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popResults }
      } = await movieApi.popular();
      const {
        data: { results: topResults }
      } = await movieApi.topRated();
      const {
        data: { results: onAirResults }
      } = await movieApi.onTheAir();
      this.setState({
        popResults,
        topResults,
        onAirResults
      });
    } catch {
      this.setState({
        error: "Page Not Found"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading, error, popResults, topResults, onAirResults } = this.state;
    return (
      <MoviePresenter
        loading={loading}
        error={error}
        popResults={popResults}
        topResults={topResults}
        onAirResults={onAirResults}
      />
    );
  }
}

export default MovieContainer;
