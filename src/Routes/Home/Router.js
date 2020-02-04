import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import TV from "./TV";
import Movie from "./Movie";
import People from "./People";

export default withRouter(() => (
  <Switch>
    <Route path="/home/people" component={People} />
    <Route path="/home/movie" component={Movie} />
    <Route path="/home" exact component={TV} />
    <Redirect from="*" to="/home" />
  </Switch>
));
