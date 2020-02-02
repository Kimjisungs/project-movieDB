import React from "react";
import "../../assets/css/swiper.css";
import Swiper from "react-id-swiper";
import styled from "styled-components";
import Tab from "../../Components/tab";
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
