import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tree, Empty, Spin } from 'antd';
import { withRouter } from 'react-router-dom';
import { cabinetObj } from '../api/api';

const CabinetTreeHooks = () => {
  const { firstList, setFirst } = useState([]);
  const { secondList, setSecond } = useState([]);
  const { cabinets, setCabinets } = useState([]);
  const { isLoading, setLoading } = useState(false);

  // This is a WIP, will need to be a recursive function to handle more pages soon
  fetchCabinetTree = () => {
    if (localStorage.getItem('cabinets')) {
      this.setCabinets({
        cabinets: JSON.parse(localStorage.getItem('cabinets')),
      });
    } else {
      cabinetObj().then(res => {
        this.setFirst({ firstList: res.data.results });
        if (res.data.next !== null) {
          cabinetObj(2).then(res2 => {
            this.setSecond({ secondList: res2.data.results });
            this.setCabinets({
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

  return <div></div>;
};

export default CabinetTreeHooks;
