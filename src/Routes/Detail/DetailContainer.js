import React from "react";
import DetailPresenter from "./DetailPresenter";
import { tvApi, movieApi, peopleApi } from "../../api";
import qs from "query-string";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname }
    } = props;

    this.state = {
      loading: true,
      error: null,
      tvPath: pathname.includes("/tvDetail"),
      moviePath: pathname.includes("/movieDetail"),
      peoplePath: pathname.includes("/peopleDetail"),
      results: null,
      modal: false
    };
  }

  modal = (() => ({
    open: () => this.setState({ modal: true }),
    close: () => this.setState({ modal: false })
  }))();

  async componentDidMount() {
    const { tvPath, moviePath, peoplePath } = this.state;
    const {
      location: { search },
      history: { push }
    } = this.props;

    const { id } = qs.parse(search);
    const uriId = parseInt(id);

    if (isNaN(uriId)) push("/");

    let results = null;
    try {
      if (tvPath) ({ data: results } = await tvApi.tvDetail(uriId));
      else if (moviePath)
        ({ data: results } = await movieApi.movieDetail(uriId));
      else if (peoplePath)
        ({ data: results } = await peopleApi.peopleDetail(uriId));
      this.setState({ results });
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
    const { loading, error, results, modal } = this.state;
    return (
      <DetailPresenter
        loading={loading}
        error={error}
        results={results}
        openModal={this.modal.open}
        closeModal={this.modal.close}
        isModal={modal}
      />
    );
  }
}

export default DetailContainer;
