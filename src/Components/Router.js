import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "Routes/Home";

export default () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);
