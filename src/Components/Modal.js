import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mask = styled.div`
  z-index: 200;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Board = styled.div`
  z-index: 300;
  position: relative;
  width: 600px;
  height: 450px;
  background-color: #fcbaec;
  @media all and (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

const VideoFrame = styled.div`
  position: relative;
  iframe {
    width: 100%;
    height: 340px;
  }
  @media all and (max-width: 768px) {
    height: 0;
    padding-bottom: 60%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

const Title = styled.h3`
  padding: 30px;
  font-size: 2rem;
  color: #090170;
  text-align: left;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  @media all and (max-width: 768px) {
    padding: 20px;
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: -80px;
  width: 80px;
  height: 80px;
  font-size: 2rem;
  cursor: pointer;
  border: 0 none;
  background-color: #090170;
  color: #fcbaec;
  @media all and (max-width: 768px) {
    top: -50px;
    right: 0;
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
`;

const Modal = ({ isModal, closeModal, results }) => {
  return isModal ? (
    <Wrap>
      <Mask onClick={closeModal} />
      <Board>
        <VideoFrame>
          <iframe
            src={`https://www.youtube.com/embed/${results.videos.results[0].key}`}
            title="title"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoFrame>
        <Title>{results.title || results.name}</Title>
        <Button type="button" onClick={closeModal}>
          X
        </Button>
      </Board>
    </Wrap>
  ) : null;
};

export default Modal;
