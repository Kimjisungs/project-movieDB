import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "Components/Header";
import Wrapper from "Components/Wrapper";

import Home from "Routes/Home";

export default () => (
  <Router>
    <Header />
    <Wrapper>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </Wrapper>
  </Router>
);
