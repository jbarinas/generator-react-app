import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {Front} from "../front/Front";
import {NoMatch} from "../nomatch/NoMatch";

export const Main: React.FunctionComponent = () => (
  <main>
    <Switch>
      <Route exact path="/404" component={NoMatch} />

      <Route exact path="/" component={Front} />

      <Redirect to="/404" />
    </Switch>
  </main>
);
