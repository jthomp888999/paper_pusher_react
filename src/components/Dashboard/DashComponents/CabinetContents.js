import React, { Component } from "react";
import { connect } from "react-redux";
import { docsInCabinet } from "../../../api/api";

class CabinetContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinetContents: [],
      isLoading: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getContents(this.props.match.params.id);
    }
  }

  componentDidMount() {
    this.getContents(this.props.match.params.id);
  }

  getContents = id => {
    console.log(id);
    this.setState({ isLoading: true });
    docsInCabinet(id).then(res => {
      this.setState({ cabinetContents: res.data.results });
      console.log(this.state.cabinetContents);
    });
    this.setState({ isLoading: false });
  };

  render() {
    const { cabinetContents } = this.state;
    return (
      <div>
        <h4>CabinetContents</h4>
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

export default connect(mapStateToProps)(CabinetContents);
