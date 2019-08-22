import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { docsInCabinet } from "../../../api/api";

class CabinetContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinetID: null,
      cabinetContents: [],
      isLoading: false
    };
  }

  nextProp = this.props.match.params.id;
  prevState = this.state.cabinetID;

  static getDerivedStateFromProps(nextProp, prevState) {
    if (nextProp !== prevState) {
      return {
        cabinetID: nextProp
      };
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    this.setState({ cabinetID: this.props.match.params.id });
    if (this.state.cabinetID) {
      await docsInCabinet(this.state.cabinetID).then(res => {
        this.setState({ cabinetContents: res.data.results });
        this.setState({ isLoading: false });
      });
    }
  }

  render() {
    const { cabinetContents, cabinetID } = this.state;
    return (
      <div>
        <h4>CabinetContents</h4>
        <h4>{cabinetID}</h4>
        <ul>
          {cabinetContents.map(item => (
            <li>{item.label}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  cabinets: state.cabinets
});

export default withRouter(connect(mapStateToProps)(CabinetContents));
