import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DevsGrid from "./developers/DevsGrid";
import DevPage from "./developers/DevPage";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DevsGrid} />
          <Route exact path="/:username" component={DevPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
