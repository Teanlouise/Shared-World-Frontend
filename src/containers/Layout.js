import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter} from 'react-router-dom';
import LogoImage from '../logo.png';
import * as actions from '../store/actions/auth'; 
import { connect } from 'react-redux';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        console.log(this.props)

        return (
            <Layout className="layout">
                <img src={LogoImage} alt="logo"/>

                <Header>
                    <div className="logo" />   
                        <Menu 
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ padding: '10px 40px', textAlign: 'center' }}
                        >
                            <Menu.Item key="1"><Link to="/home">Start</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/profile">Profiles</Link></Menu.Item>
                            {
                                this.props.isAuthenticated ?
                            <Menu.Item key="4" onClick={this.props.logout}>{<a href={'/'}>Logout</a>}</Menu.Item>
                            :    
                            <Menu.Item key="4"><Link to="/login"></Link></Menu.Item>
                            }
                        </Menu>
                </Header>

                <Content style={{ padding: '0 10px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>Shared.World ©2019 Created by Teanlouise</Footer>

            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));