import { GET_START_MILLISECONDS } from "../Action";
import { GET_END_MILLISECONDS } from "../Action";

const INITIAL_STATE = {
  milliSecond: {
    start: 0,
    end: 0
  }
};

const DateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_START_MILLISECONDS:
      return {
        ...state,
        milliSecond: {
          ...state.milliSecond,
          start: action.start
        }
      };
    case GET_END_MILLISECONDS:
      return {
        ...state,
        milliSecond: {
          ...state.milliSecond,
          end: action.end
        }
      };
    default:
      return state;
  }
};

export default DateReducer;
