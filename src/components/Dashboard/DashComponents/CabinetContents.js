import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CabinetContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinetID: this.props.match.params.id,
      cabinetContents: this.props.location.state,
      isLoading: true
    } 
  }

  // componentDidMount() {
  // //   const token = this.props.auth.token;

  // //   const headers = {
  // //     "Content-Type": "application/json",
  // //     Authorization: `token ${token}`
  // //   };

  // //   API.get(`/cabinets/cabinets/${this.cabinetID}/documents`, {
  // //     headers: headers
  // //   }).then(res => {
  // //   this.setState({
  // //     cabinetContents: res.data.results
  // //   })

  // // })
  // }

  render() {
    const { isLoading, cabinetContents, cabinetID } = this.state;
    
    console.log(cabinetContents)
    // if (!isLoading) {
    // }


    return (
      <div>
        <h4>CabinetContents</h4>
        <ul>
          {/* {cabinetContents.map(item => (
            <li>{item.label}</li>
          ))} */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  cabinets: state.cabinets
})

export default withRouter(connect(mapStateToProps)(CabinetContents));
