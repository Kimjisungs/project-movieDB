import React from "react";
import styled from "styled-components";
import "../../assets/css/swiper.css";
import Swiper from "react-id-swiper";
import Router from "./Router";
import Tab from "../../Components/Tab";
import Visual from "../../Components/Visual";

const VisualContainer = styled.div`
  display: flex;
`;

const VisualWrap = styled.div`
  width: 80%;
`;

const TabWrap = styled.div`
  width: 20%;
`;

const HomePresenter = ({ loading, error, popularLists }) => {
  return (
    <>
      <VisualContainer>
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
          <Tab
            to={[
              { pathname: "/home", text: "Movie" },
              { pathname: "/home/tv", text: "TV" },
              { pathname: "/home/People", text: "People" },
              { pathname: "/home/genres", text: "genres" }
            ]}
          />
        </TabWrap>
      </VisualContainer>
      <Router />
    </>
  );
};

export default HomePresenter;
