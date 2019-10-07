import { Menu, Dropdown, Icon, message, List, Card, Avatar, Select, Button, Row, Col} from 'antd';
import React, {Component} from 'react';
import axios from 'axios';
import { OmitProps } from 'antd/lib/transfer/renderListBody';

// const { Meta } = Card;
const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

class Home extends React.Component {

  state = {
    country: []
  }
  
  componentDidMount() {
    axios.get('https://shared-world.appspot.com/api/country/')
      .then(res => {
        this.setState({
          country: res.data
        });
      })
  }
  
  render() {         
    const { country } = this.state;
    const user = 2;

    // Get list of countries
    let countryList = country.length > 0
    && country.map((item, i) => {
      return (
        <option 
          key={item.country} 
          value={item.country} 
          onClick={onClick}
        >
          {item.country}
        </option>
      )
    }, this);

    // Show list of countries in dropdown menu
  return (

  <Row>
  <Col span={18} push={6}>

  </Col>

    <Col span={6} pull={18}>
      <div>
        <Select
          style={{ width: 240 }}
          placeholder="Select a country"
        >
            {countryList}
        </Select>
        <br />
        <br />
        <Button type="primary" htmlType="submit" block>{<a href={`post/${user}/${country}`}>SEARCH</a>}</Button>        
      </div>
    </Col>
</Row>    


    );
  }
}

export default Home;

