import React from "react";
import MoviePresenter from "./MoviePresenter";
import { movieApi } from "../../../api";

class MovieContainer extends React.Component {
  state = {
    loading: null,
    error: null,
    nowResults: null,
    popResults: null,
    topResults: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowResults }
      } = await movieApi.nowPlaying();
      const {
        data: { results: popResults }
      } = await movieApi.popular();
      const {
        data: { results: topResults }
      } = await movieApi.topRated();
      this.setState({
        nowResults,
        popResults,
        topResults
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
    const { loading, error, nowResults, popResults, topResults } = this.state;
    const limitLength = 5;
    return (
      <MoviePresenter
        loading={loading}
        error={error}
        nowResults={
          nowResults && nowResults.filter((empty, index) => index < limitLength)
        }
        popResults={
          popResults && popResults.filter((empty, index) => index < limitLength)
        }
        topResults={
          topResults && topResults.filter((empty, index) => index < limitLength)
        }
      />
    );
  }
}

export default MovieContainer;
