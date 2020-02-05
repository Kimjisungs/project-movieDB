import { GET_QUERY } from "../Action";

const INITIAL_STATE = {
  query: ""
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_QUERY:
      return {
        ...state,
        query: action.query
      };
    default:
      return state;
  }
};

export default searchReducer;
