import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class DashRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/dashboard/:cabinetID" component={CabinetContents} />
      </Switch>
    );
  }
}

export default DashRoutes;