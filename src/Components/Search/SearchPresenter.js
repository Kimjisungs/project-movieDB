import React from "react";
import styled from "styled-components";

const SearchWrap = styled.div`
  width: 60%;
  height: 70px;
  @media all and (max-width: 1024px) {
    height: 50px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  font-size: 1.75rem;
  background-color: transparent;
  border: 4px solid #dfdfdf;
  color: #fff;
  @media all and (max-width: 1024px) {
    border: 2px solid #dfdfdf;
    font-size: 1rem;
  }
`;

const Form = styled.form`
  position: relative;
  height: 100%;
`;

const Button = styled.button`
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 100%;
  border: 4px solid transparent;
  background-color: #dfdfdf;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #a2a2a2;
  }
  &:active {
    background-color: #01d277;
  }
  @media all and (max-width: 1024px) {
    width: 50px;
  }
`;

const searchStyle = {
  pointerEvents: "none",
  display: "block",
  width: "100%",
  height: "54%"
};

const SearchPresenter = ({ handleSubmit, updateQuery, searchQuery }) => {
  return (
    <SearchWrap>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movie. ex) code, movie"
          onChange={updateQuery}
          value={searchQuery}
        />
        <Button type="button" onClick={handleSubmit}>
          <yt-icon className="style-scope ytd-searchbox">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              className="style-scope yt-icon"
              style={searchStyle}
            >
              <g className="style-scope yt-icon">
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </yt-icon>
        </Button>
      </Form>
    </SearchWrap>
  );
};

export default SearchPresenter;
