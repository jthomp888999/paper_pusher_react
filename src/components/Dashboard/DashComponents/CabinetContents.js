import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import API from '../../../api/api';

class CabinetContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinetContents: [],
      isLoading: true
    } 

  }

  componentDidMount() {

    this.setState({
      cabinetContents: this.props.location.state
    })
    this.setState({isLoading: false})
    //I repeat this part at every place the api makes a call
    //I really need to simplify this using axios
    // const token = this.props.auth.token;

    // const headers = {
    //   "Content-Type": "application/json",
    //   Authorization: `token ${token}`
    // };
    // API.get(`/cabinets/cabinets/${this.props.match.params.id}/documents`, {
    //   headers: headers
    // }).then(res => {
    //   console.log(res.data)
    //   this.setState({ cabinetContents: res.data.results });
    //   this.setState({ isLoading: false });
    // });
  }

  render() {
    const { isLoading, cabinetContents } = this.state;
  
    if (!isLoading) {
      console.log(cabinetContents)
    }

    return (
      <div>
        <h4>CabinetContents</h4>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default withRouter(connect(mapStateToProps)(CabinetContents));
