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
`;

const VideoFrame = styled.div`
  iframe {
    width: 100%;
    height: 340px;
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
`;

const Modal = ({ isModal, closeModal, results }) => {
  return (
    <>
      <Mask />
      <Board>
        <VideoFrame></VideoFrame>
        <Name></Name>
        <Date></Date>
        <Button>X</Button>
      </Board>
    </>
  );
};

export default Modal;
