import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Overview from "../views/overview";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/overview" component={Overview} />

        <Redirect push to="/overview" />
      </Switch>
    </BrowserRouter>
  );
}
