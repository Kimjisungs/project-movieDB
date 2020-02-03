import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import Moive from "./Movie";
import TV from "./TV";

export default withRouter(() => (
  <Switch>
    <Route path="/home/genres" component={TV} />
    <Route path="/home/People" component={TV} />
    <Route path="/home/tv" component={TV} />
    <Route path="/home" exact component={Moive} />
    <Redirect from="*" to="/home" />
  </Switch>
));
