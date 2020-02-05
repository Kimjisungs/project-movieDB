import React from "react";
import Router from "./Router";
import GlobalStyle from "./GrobalStyle";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "../Redux/Reducer";

const App = () => {
  return (
    <Provider store={createStore(Reducers)}>
      <GlobalStyle />
      <Router />
    </Provider>
  );
};

export default App;
