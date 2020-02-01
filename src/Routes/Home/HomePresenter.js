import React from "react";

import Tab from "Components/tab";
import Router from "./Router";

const HomePresenter = props => {
  return (
    <>
      <div>visual</div>
      <Tab
        to={[
          { pathname: "/home", text: "무비" },
          { pathname: "/home/tv", text: "티비" }
        ]}
      />
      <Router />
    </>
  );
};

export default HomePresenter;
