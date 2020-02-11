import React from "react";
import styled from "styled-components";

const Mask = styled.div``;

const Board = styled.div``;

const VideoFrame = styled.div``;

const Name = styled.h3``;

const Date = styled.q``;

const Button = styled.div``;

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
