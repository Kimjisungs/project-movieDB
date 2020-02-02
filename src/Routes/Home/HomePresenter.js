import React from "react";
import "../../assets/css/swiper.css";
import Swiper from "react-id-swiper";
import Router from "./Router";
import Tab from "../../Components/tab";
import Visual from "../../Components/visual";

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
