import React, { Component } from "react";
import DashboardLayout from "./DashboardLayout";
import DashRoutes from "./DashRoutes/DashRoutes";

class Dashboard extends Component {
  render() {
    return (
      <DashboardLayout>
        <h1>Dashboard</h1>
        <DashRoutes />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
