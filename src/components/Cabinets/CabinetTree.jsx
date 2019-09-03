/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tree, Empty, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { cabinetObj } from '../api/api';

const { DirectoryTree, TreeNode } = Tree;

class Cabinets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstList: [],
      secondList: [],
      cabinets: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetchCabinetTree();

    this.setState({ isLoading: false });
  }

  // Clean up the localstorage
  componentWillUnmount() {
    localStorage.removeItem('cabinets');
  }

  // This is a WIP, will need to be a recursive function to handle more pages soon
  fetchCabinetTree = () => {
    if (localStorage.getItem('cabinets')) {
      this.setState({
        cabinets: JSON.parse(localStorage.getItem('cabinets')),
      });
    } else {
      cabinetObj().then(res => {
        this.setState({ firstList: res.data.results });
        if (res.data.next !== null) {
          cabinetObj(2).then(res2 => {
            this.setState({ secondList: res2.data.results });
            this.setState({
              cabinets: [
                ...this.state.firstList,
                ...this.state.secondList,
              ],
            });
            localStorage.setItem(
              'cabinets',
              JSON.stringify(this.state.cabinets),
            );
          });
        }
      });
    }
  };

  // Load contents in cernter body, will reset root page if any errors occur
  onSelect = (selectedKeys, info) => {
    const { history } = this.props;
    try {
      history.push({
        pathname: `/cabinets/${info.selectedNodes[0].props.id}`,
        state: { id: info.selectedNodes[0].props.id },
      });
    } catch {
      history.push('/');
    }
  };

  render() {
    const { cabinets, isLoading } = this.state;

    const cleanCabinets = [];

    // Must actually clean the data from the server to be actually nested
    if (!isLoading) {
      cabinets.map(item => {
        if (item.children.length && item.parent === null) {
          return cleanCabinets.push(item);
        }
        return cleanCabinets;
      });
    }

    // Recursively build treenodes
    const renderTreeNodes = data =>
      data.map(item => {
        if (item.children) {
          return (
            <TreeNode title={item.label} id={item.id} key={item.id}>
              {renderTreeNodes(item.children)}
            </TreeNode>
          );
        }
        return (
          <TreeNode
            isLeaf
            item={item.label}
            id={item.id}
            key={item.id}
          />
        );
      });

    // Conditionally render the cabinet tree
    if (isLoading) {
      return <Spin size="large" />;
    }
    if (cleanCabinets.length === 0) {
      return <Empty description="Cabinets Empty" />;
    }
    return (
      <>
        <DirectoryTree onSelect={this.onSelect}>
          {renderTreeNodes(cleanCabinets)}
        </DirectoryTree>
      </>
    );
  }
}

Cabinets.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Cabinets);
