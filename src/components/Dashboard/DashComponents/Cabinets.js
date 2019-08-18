import React, { Component } from "react";
import { Tree } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import API from "../../../api/api";

const { TreeNode } = Tree;

class Cabinets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinets: [],
      isLoading: true
    };
  }

  componentDidMount() {
    //I repeat this part at every place the api makes a call
    //I really need to simplify this using axios
    const token = this.props.auth.token;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `token ${token}`
    };
    API.get(`/cabinets/cabinets/`, {
      headers: headers
    }).then(res => {
      this.setState({ cabinets: res.data.results });
      this.setState({ isLoading: false });
    });
  }

  onSelect = (selectedKeys, info) => {
    // Catching the id of the cabinet contents to load
    console.log("selected", info.selectedNodes[0].props.id);
    history.push("/cabinets/${info.selectedNodes[0].props.id}");
  };

  render() {
    const cabinets = this.state.cabinets;
    let cleanCabinets = [];

    //Must actually clean the data from the server to be actually nested
    if (!this.state.isLoading) {
      cabinets.map(item => {
        if (item.children.length && item.parent === null) {
          return cleanCabinets.push(item);
        }
        return cleanCabinets;
      });
    }

    const renderTreeNodes = data =>
      data.map(item => {
        if (item.children) {
          return (
            <TreeNode title={item.label} key={item.id} id={item.id}>
              {renderTreeNodes(item.children)}
            </TreeNode>
          );
        }
        return (
          <TreeNode item={item.label} {...item} key={item.id} id={item.id} />
        );
      });

    return (
      <div>
        <Tree showLine onSelect={this.onSelect}>
          {renderTreeNodes(cleanCabinets)}
        </Tree>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Cabinets));
