import React, { Component } from "react";

class CabinetContents extends Component {
  render() {
    return (
      <div>
        <h4>CabinetContents</h4>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default CabinetContents;
