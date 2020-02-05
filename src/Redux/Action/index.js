export const GET_QUERY = "QUERY";

export const getQuery = query => {
  return { type: GET_QUERY, query };
};
