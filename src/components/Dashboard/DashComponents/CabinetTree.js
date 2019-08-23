import React, { Component } from "react";
import { Tree } from "antd";
import { withRouter } from "react-router-dom";
import { cabinetObj } from "../../../api/api";

const { TreeNode } = Tree;

class Cabinets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinets: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchCabinetTree();
    this.setState({ isLoading: false });
  }

  componentWillUnmount() {
    localStorage.removeItem("cabinets");
  }

  fetchCabinetTree = () => {
    if (localStorage.getItem("cabinets")) {
      this.setState({ cabinets: JSON.parse(localStorage.getItem("cabinets")) });
    } else {
      cabinetObj().then(res => {
        console.log(res.data);
        this.setState({ cabinets: res.data.results });
        localStorage.setItem("cabinets", JSON.stringify(this.state.cabinets));
      });
    }
  };

  onSelect = (selectedKeys, info) => {
    try {
      this.props.history.push({
        pathname: `/cabinets/${info.selectedNodes[0].props.id}`
      });
    } catch {
      this.props.history.push("/");
    }
  };

  render() {
    const { cabinets, isLoading } = this.state;

    let cleanCabinets = [];

    //Must actually clean the data from the server to be actually nested
    if (!isLoading) {
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

    if (isLoading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Tree showLine onSelect={this.onSelect}>
            {renderTreeNodes(cleanCabinets)}
          </Tree>
        </div>
      );
    }
  }
}

export default withRouter(Cabinets);
