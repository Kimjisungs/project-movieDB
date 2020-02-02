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
    const { loading, error, popularLists } = this.state;
    return (
      <HomePresenter
        loading={loading}
        error={error}
        popularLists={
          popularLists && popularLists.filter((vidoe, index) => index < 5)
        }
      />
    );
  }
}

export default HomeContainer;
