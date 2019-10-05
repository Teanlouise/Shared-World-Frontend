import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import LogoImage from '../logo.png'

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    
    return (
        <Layout className="layout">
            <img src={LogoImage}/>

            <Header>
                <div className="logo" />   
                    <Menu 
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ padding: '10px 40px', textAlign: 'center' }}
                    >
                        <Menu.Item key="1"><Link to="/">Start</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/about">About</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/profile">Profile</Link></Menu.Item>
                    </Menu>
            </Header>

            <Content style={{ padding: '0 10px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.children}
                </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Shared.World ©2018 Created by Teanlouise</Footer>

        </Layout>
    );
}

export default CustomLayout;