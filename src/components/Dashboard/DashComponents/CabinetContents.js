import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { setHeaders } from '../../../api/api';
import { docsInCabinet } from '../../../api/api';

class CabinetContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cabinetContents: [],
      isLoading: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getContents(this.props.match.params.id);
    }
  }

  componentDidMount() {
    setHeaders(this.props.auth.token);
    this.getContents(this.props.match.params.id);
  }

  // Return list of all documents in cabinet
  getContents = id => {
    this.setState({ isLoading: true });
    docsInCabinet(id).then(res => {
      console.log(res.data);
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
    } else {
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
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(CabinetContents);
