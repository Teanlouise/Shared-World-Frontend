import React from 'react';
import AboutImage from '../about.png'
import { Layout } from 'antd';

class About extends React.Component {

    render() {
        return (
            <Layout className="layout">
                <img src={AboutImage}/>
            </Layout>            
        )
    }
}

export default About;