import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { setHeaders, docsInCabinet } from '../../../api/api';

class CabinetContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinetContents: [],
      isLoading: false
    };
  }

  componentDidMount() {
    setHeaders(this.props.auth.token);
    this.getContents(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getContents(this.props.match.params.id);
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
        key: 'date_added'
      },
      {
        title: 'Title',
        dataIndex: 'label',
        key: 'label'
      }
    ];

    if (isLoading) {
      return <>Loading...</>;
    }
    return (
      <>
        <Table
          rowKey={Math.random}
          columns={columns}
          dataSource={cabinetContents}
        />
      </>
    );
  }
}

CabinetContents.propTypes = {
  auth: PropTypes.shape({
    token: PropTypes.string.isRequired
  }),
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  })
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CabinetContents);
