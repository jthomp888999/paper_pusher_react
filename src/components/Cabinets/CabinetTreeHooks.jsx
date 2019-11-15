import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tree, Empty, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { cabinetObj } from '../api/api';

const { DirectoryTree, TreeNode } = Tree;

const CabinetTreeHooks = props => {
  const [isLoading, setLoading] = useState(false);
  const [firstList, setFirst] = useState([]);
  const [secondList, setSecond] = useState([]);
  const [cabinets, setCabinets] = useState([]);

  // This is a WIP, will need to be a recursive function to handle more pages soon
  const fetchCabinetTree = () => {
    if (localStorage.getItem('cabinets')) {
      setCabinets({
        cabinets: JSON.parse(localStorage.getItem('cabinets')),
      });
    } else {
      cabinetObj().then(res => {
        setFirst({ firstList: res.data.results });
        if (res.data.next !== null) {
          cabinetObj(2).then(res2 => {
            setSecond({ secondList: res2.data.results });
            console.log(secondList);
            setCabinets({
              cabinets: [...firstList, ...secondList],
            });
            localStorage.setItem(
              'cabinets',
              JSON.stringify(cabinets),
            );
          });
        }
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCabinetTree();
    setLoading(false);
  });

  // Load contents in cernter body, will reset root page if any errors occur
  const onSelect = (selectedKeys, info) => {
    const { history } = props;
    try {
      history.push({
        pathname: `/cabinets/${info.selectedNodes[0].props.id}`,
        state: { id: info.selectedNodes[0].props.id },
      });
    } catch {
      history.push('/');
    }
  };

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
          <TreeNode title={item.label} id={item.id}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode item={item.label} id={item.id} isLeaf />;
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
      <DirectoryTree onSelect={onSelect}>
        {renderTreeNodes(cleanCabinets)}
      </DirectoryTree>
    </>
  );
};

CabinetTreeHooks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(CabinetTreeHooks);
