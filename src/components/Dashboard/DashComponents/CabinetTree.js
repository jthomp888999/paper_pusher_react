import React, { Component } from "react";
import { Tree } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { cabinetObj, docsInCabinet } from "../../../api/api";
import { setCabinetID } from "../../../redux/Actions/cabinetActions";

const { TreeNode } = Tree;

class Cabinets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinets: [],
      isLoading: true,
      cabinetContents: []
    };
  }

  componentDidMount() {
    cabinetObj().then(res => {
      this.setState({ cabinets: res.data.results });
      this.setState({ isLoading: false });
    });
  }

  onSelect = (selectedKeys, info) => {
    try {
      docsInCabinet(info.selectedNodes[0].props.id).then(res => {
        this.setState({
          cabinetContents: res.data.results
        });
      });
      this.props.dispatch(setCabinetID(info.selectedNodes[0].props.id));
      this.props.history.push({
        pathname: `/cabinets/${info.selectedNodes[0].props.id}`,
        state: this.state.cabinetContents
      });
    } catch {
      this.props.history.push("/");
    }
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

export default withRouter(connect(mapStateToProps)(Cabinets));
