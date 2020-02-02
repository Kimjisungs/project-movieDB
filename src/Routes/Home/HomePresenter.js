import React from "react";
import "../../assets/css/swiper.css";
import Swiper from "react-id-swiper";
import Router from "./Router";
import Tab from "../../Components/tab";
import Visual from "../../Components/visual";

const HomePresenter = ({ loading, error, popularLists }) => {
  return (
    <>
      {loading ? (
        <div>로딩</div>
      ) : (
        <Swiper>
          {popularLists &&
            popularLists.length > 0 &&
            popularLists.map(visual => (
              <div key={visual.id}>
                <Visual
                  id={visual.id}
                  title={visual.name}
                  image={visual.backdrop_path}
                />
              </div>
            ))}
        </Swiper>
      )}
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
