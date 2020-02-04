import React from "react";
import PeoplePresenter from "./PeoplePresenter";
import { peopleApi } from "../../../api";

class PeopleContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    popResults: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popResults }
      } = await peopleApi.popular();
      this.setState({
        popResults
      });
    } catch {
      this.setState({
        error: "Poster Not Found"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { loading, error, popResults } = this.state;
    const limitLength = 5;
    return (
      <PeoplePresenter
        loading={loading}
        error={error}
        popResults={
          popResults && popResults.filter((empty, index) => index < limitLength)
        }
      />
    );
  }
}

export default PeopleContainer;
