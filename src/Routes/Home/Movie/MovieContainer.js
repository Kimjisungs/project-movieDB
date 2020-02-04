import React from "react";
import MoviePresenter from "./MoviePresenter";
import { tvApi } from "../../../api";

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
      } = await tvApi.popular();
      const {
        data: { results: topResults }
      } = await tvApi.topRated();
      const {
        data: { results: onAirResults }
      } = await tvApi.onTheAir();
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
    const limitLength = 5;
    return (
      <MoviePresenter
        loading={loading}
        error={error}
        popResults={
          popResults && popResults.filter((empty, index) => index < limitLength)
        }
        topResults={
          topResults && topResults.filter((empty, index) => index < limitLength)
        }
        onAirResults={
          onAirResults &&
          onAirResults.filter((empty, index) => index < limitLength)
        }
      />
    );
  }
}

export default MovieContainer;
