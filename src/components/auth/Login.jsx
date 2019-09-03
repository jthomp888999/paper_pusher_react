import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Row, Card } from 'antd';
import { Redirect } from 'react-router-dom';
import { loginUser } from '../redux/Actions/authActions';

class Login extends Component {
  handleSubmit = e => {
    const { form, dispatch } = this.props;
    e.preventDefault();
    // Get username and password from forms
    form.validateFields((err, user) => {
      if (!err) {
        // Send user to login action
        dispatch(loginUser(user));
      }
    });
  };

  render() {
    const { isAuthenticated, form } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Card
          style={{ width: 300 }}
          title="Login"
          extra={<Icon type="unlock" />}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {form.getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {form.getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon
                      type="lock"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Button
              onClick={this.handleSubmit}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form>
        </Card>
      </Row>
    );
  }
}
Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const WrappedLogin = Form.create({ name: 'normal_login' })(Login);

export default connect(mapStateToProps)(WrappedLogin);
