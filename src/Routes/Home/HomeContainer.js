import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "../../api";

class HomeContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    popularLists: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: popularLists }
      } = await movieApi.popular();
      this.setState({
        popularLists
      });
    } catch {
      this.setState({
        error: "visual Not Found"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <>
        <HomePresenter />
      </>
    );
  }
}

export default HomeContainer;
