import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPanel from "containers/panels/MainPanel";

export default (
  <Router>
    <Fragment>
      <Route component={MainPanel} path="/" />
    </Fragment>
  </Router>
);
