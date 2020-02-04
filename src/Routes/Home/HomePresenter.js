import React from "react";
import styled from "styled-components";
import "../../assets/css/swiper.css";
import Swiper from "react-id-swiper";
import Router from "./Router";
import Tab from "../../Components/Tab";
import Visual from "../../Components/Visual";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";

const VisualWrap = styled.div``;

const TabContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TabTitle = styled.h2`
  padding: 30px 20px 40px;
  font-size: 2.25rem;
  font-weight: 700;
  color: #01d277;
  text-align: center;
`;

const TabWrap = styled.div`
  position: absolute;
  right: 0;
`;

const ErrorWrap = styled.div`
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
`;

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #000;
`;

const HomePresenter = ({ loading, error, popularLists }) => {
  const params = {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return (
    <>
      {loading ? (
        <LoadingWrap>
          <Loader />
        </LoadingWrap>
      ) : (
        <VisualWrap>
          {popularLists && popularLists.length > 0 && (
            <Swiper {...params}>
              {popularLists.map(visual => (
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
          {error && (
            <ErrorWrap>
              <Message text="이미지를 불러올 수 없습니다" />
            </ErrorWrap>
          )}
        </VisualWrap>
      )}
      <TabContainer>
        <TabTitle>Movie Lists</TabTitle>
        <TabWrap>
          <Tab
            to={[
              { pathname: "/home", text: "TV" },
              { pathname: "/home/tv", text: "Movie" },
              { pathname: "/home/People", text: "People" }
            ]}
            activeStyle={{
              visible: `background-color: rgba(0, 0, 0, 0.4);border-bottom:3px solid #01d277;`,
              hidden: `background-color: transparent;border-bottom:3px solid transparent;`
            }}
          />
        </TabWrap>
      </TabContainer>
      <Router />
    </>
  );
};

export default HomePresenter;
