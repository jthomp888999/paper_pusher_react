import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Table, Spin } from 'antd';
import { setHeaders, docsInCabinet } from '../api';

class CabinetContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinetContents: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    const { auth, location } = this.props;
    setHeaders(auth.token);
    this.getContents(location.state.id);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.state.id !== prevProps.location.state.id) {
      this.getContents(location.state.id);
    }
  }

  // Return list of all documents in cabinet
  getContents = id => {
    this.setState({ isLoading: true });
    docsInCabinet(id).then(res => {
      this.setState({ cabinetContents: res.data.results });
    });
    this.setState({ isLoading: false });
  };

  render() {
    const { cabinetContents, isLoading } = this.state;
    const columns = [
      {
        title: 'Date Added',
        dataIndex: 'date_added',
        key: 'date_added',
      },
      {
        title: 'Title',
        dataIndex: 'label',
        key: 'label',
      },
    ];

    if (isLoading) {
      return <Spin size="large" />;
    }
    return (
      <Table
        rowKey={Math.random}
        columns={columns}
        dataSource={cabinetContents}
      />
    );
  }
}

CabinetContents.propTypes = {
  auth: PropTypes.shape({
    token: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(CabinetContents));
