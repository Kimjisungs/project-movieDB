import React from "react";
import SearchPresenter from "./SearchPresenter";
import { tvApi, movieApi } from "../../api";
import qs from "query-string";

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      tvResults: null,
      movieResults: null
    };
  }

  uriQuery = () => {
    const {
      location: { search }
    } = this.props;
    const { query: uriQuery } = qs.parse(search);
    return uriQuery;
  };

  getApi = async query => {
    try {
      const {
        data: { results: tvResults }
      } = await tvApi.searchTv(query);
      const {
        data: { results: movieResults }
      } = await movieApi.searchMovie(query);
      this.setState({
        tvResults,
        movieResults
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
  };

  redirectHome = () => {
    const { history } = this.props;
    if (!this.uriQuery()) history.push("/home");
  };

  componentDidMount() {
    this.getApi(this.uriQuery());
    this.redirectHome();
  }

  searchData = prevProps => {
    const {
      location: { search }
    } = prevProps;
    const { query: prevUriQuery } = qs.parse(search);

    const nowUriQuiry = this.uriQuery();

    if (prevUriQuery !== nowUriQuiry) this.getApi(nowUriQuiry);
  };

  componentDidUpdate(prevProps) {
    this.searchData(prevProps);
  }

  render() {
    const { loading, error, tvResults, movieResults } = this.state;
    const limitLength = 10;
    return (
      <>
        <SearchPresenter
          loading={loading}
          error={error}
          tvResults={
            tvResults && tvResults.filter((empty, index) => index < limitLength)
          }
          movieResults={
            movieResults &&
            movieResults.filter((empty, index) => index < limitLength)
          }
        />
      </>
    );
  }
}

export default SearchContainer;
