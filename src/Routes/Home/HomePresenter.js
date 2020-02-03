import React from "react";
import styled from "styled-components";
import "../../assets/css/swiper.css";
import Swiper from "react-id-swiper";
import Router from "./Router";
import Tab from "../../Components/Tab";
import Visual from "../../Components/Visual";

const VisualWrap = styled.div``;

const TabContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TabTitle = styled.h2`
  padding: 30px 20px 40px;
  font-size: 1.75rem;
  color: #01d277;
  text-align: center;
`;

const TabWrap = styled.div`
  position: absolute;
  right: 0;
`;

const HomePresenter = ({ loading, error, popularLists }) => {
  return (
    <>
      {loading ? (
        <div>로딩</div>
      ) : (
        <VisualWrap>
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
        </VisualWrap>
      )}
      <TabWrap>
        <TabTitle>Movie Lists</TabTitle>
        <Tabs
          to={[
            { pathname: "/home", text: "Movie" },
            { pathname: "/home/tv", text: "TV" },
            { pathname: "/home/People", text: "People" },
            { pathname: "/home/genres", text: "genres" }
          ]}
          activeStyle={{
            visible: `background-color: rgba(0, 0, 0, 0.3)`,
            hidden: `background-color: transparent`
          }}
        />
      </TabWrap>
      <Router />
    </>
  );
};

export default HomePresenter;
