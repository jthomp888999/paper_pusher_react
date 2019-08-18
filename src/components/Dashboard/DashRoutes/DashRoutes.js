import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CabinetContents from "../DashComponents/CabinetContents";

export default class DashRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/cabinet/:id" component={CabinetContents} />
        </Switch>
      </div>
    );
  }
}
