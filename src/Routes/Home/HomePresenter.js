import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import "../../assets/css/swiper.css";
import "../../assets/css/custom.css";
import Swiper from "react-id-swiper";
import Router from "./Router";
import Tab from "../../Components/Tab";
import Visual from "../../Components/Visual";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";
import PropTypes from "prop-types";

const VisualWrap = styled.div``;

const TabContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media all and (max-width: 758px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const TabTitle = styled.h2`
  padding: 30px 20px 40px;
  font-size: 2.25rem;
  font-weight: 700;
  color: #01d277;
  text-align: center;
  @media all and (max-width: 1024px) {
    padding: 20px;
    font-size: 1.75rem;
  }
  @media all and (max-width: 758px) {
    width: 100%;
    padding: 30px 20px;
    font-size: 1.5rem;
  }
`;

const TabWrap = styled.div`
  position: absolute;
  right: 0;
  @media all and (max-width: 758px) {
    position: static;
  }
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
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return (
    <>
      <Helmet>
        <title>Home - Movie DB</title>
      </Helmet>
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
                    isDetail="tvDetail"
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
              { pathname: "/home/movie", text: "Movie" },
              { pathname: "/home/people", text: "People" }
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

HomePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  popularLists: PropTypes.array
};

export default HomePresenter;
