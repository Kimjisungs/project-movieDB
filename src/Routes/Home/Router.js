import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import Moive from "./Movie";
import TV from "./TV";
import People from "./People";

export default withRouter(() => (
  <Switch>
    <Route path="/home/People" component={People} />
    <Route path="/home/tv" component={TV} />
    <Route path="/home" exact component={Moive} />
    <Redirect from="*" to="/home" />
  </Switch>
));
