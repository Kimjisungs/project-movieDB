import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadingStart, loadingEnd } from "../Redux/Action";

const AniWidthBar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const LoadingBarShape = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #eee;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    animation: ${AniWidthBar} ${props => `${props.barAni * 0.001}`}s ease-in-out;
    height: 100%;
    background-color: red;
    transition: all 0.2s;
  }
`;

class LoadingBar extends React.Component {
  barAni = () => {
    const date = new Date();
    const milliSeconds = date.getMilliseconds();
    const {
      loading,
      startTime,
      endTime,
      loadingStart,
      loadingEnd
    } = this.props;
    let totalSeconds = 0;

    if (loading && !startTime) loadingStart(milliSeconds);
    if (!loading && !endTime) loadingEnd(milliSeconds);

    let _startTime = 0;
    let _endTime = 0;
    if (!loading && startTime && endTime) {
      _startTime = startTime > 500 ? 1000 - startTime : startTime;
      _endTime = endTime > 500 ? 1000 - endTime : endTime;
      totalSeconds = Math.abs(_startTime + _endTime);
      totalSeconds =
        totalSeconds < 100 ? `0${totalSeconds}` : `${totalSeconds}`;
      console.log(
        `startTime : ${_startTime}, endTime : ${_endTime}, 값 > 500 ? 1000 - 값 : 값 -> ${totalSeconds}`
      );
      console.log(`양수 totalSeconds : ${totalSeconds}`);
      return totalSeconds;
    }
  };

  componentWillUnmount() {
    const { loadingStart, loadingEnd } = this.props;
    loadingStart(0);
    loadingEnd(0);
  }

  render() {
    return <LoadingBarShape barAni={this.barAni()} />;
  }
}

const mapStateToProps = state => {
  return {
    startTime: state.loading.milliSecond.start,
    endTime: state.loading.milliSecond.end
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadingStart,
      loadingEnd
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingBar);
