import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        {/**<Route path="/:id" component={Details} /> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
