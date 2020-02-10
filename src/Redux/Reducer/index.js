import { combineReducers } from "redux";
import search from "./Search";
import loading from "./Loading";

export default combineReducers({
  search,
  loading
});
