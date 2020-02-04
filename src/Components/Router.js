import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./Header";
import Wrapper from "./Wrapper";

import Home from "../Routes/Home";
import Search from "../Routes/Search";

export default () => (
  <Router>
    <Header />
    <Wrapper>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/home" component={Home} />
        <Redirect from="*" to="/home" />
      </Switch>
    </Wrapper>
  </Router>
);
