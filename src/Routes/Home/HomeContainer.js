import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "../../api";

class HomeContainer extends React.Component {
  render() {
    return (
      <>
        <HomePresenter />
      </>
    );
  }
}

export default HomeContainer;
