import React from 'react';
import { Form, Icon, Input, Button, Spin } from 'antd';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import * as actions from '../store/actions/auth';
import LoginImage from '../login.png';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class NormalLoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          this.props.onAuth(values.username, values.password);
        //   this.props.history.push(`/${values.username}`);
      }
    });    
    this.props.history.push('/home');
  }

  render() {

    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
        <p>{this.props.error.message}</p>
        );
    }

    const { getFieldDecorator } = this.props.form;
    return (
        <div 
            style={{
                backgroundImage: "url(" + LoginImage + ")", 
                padding: '100px', 
                backgroundSize: 'cover'
            }}
        > 
            {errorMessage}            
            {
                this.props.loading ?                
                <Spin indicator={antIcon} />
                :
                <Form onSubmit={this.handleSubmit} className="login-form"
                style={{ padding:'100px', margin:'50px', marginLeft: '400px', marginRight: '400px',textAlign: 'center', border: '5px solid black', background: 'white'}}>
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                    </Form.Item>

                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>

                    <Form.Item>
                    <Button type="primary" htmlType="submit" style={{marginRight: '10px'}}>
                        LOGIN
                    </Button>
                    Or
                    <NavLink 
                        style={{marginRight: '10px'}} to='/signup'>  SIGNUP
                    </NavLink>
                    </Form.Item>

                </Form>
            }
      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const mapStateToProps = (state) => {
    return{
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);