export const GET_QUERY = "QUERY";
export const GET_START_MILLISECONDS = "GET_START_MILLISECONDS";
export const GET_END_MILLISECONDS = "GET_END_MILLISECONDS";

export const getQuery = query => {
  return { type: GET_QUERY, query };
};

export const loadingStart = start => ({
  type: GET_START_MILLISECONDS,
  start
});

export const loadingEnd = end => ({
  type: GET_END_MILLISECONDS,
  end
});
