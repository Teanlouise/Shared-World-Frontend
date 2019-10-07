import { message, Select, Button, Row, Col} from 'antd';
import React from 'react';
import axios from 'axios';

class Home extends React.Component {

  state = {
    selected: "ZZ",
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
  
  onClick = ({ key }) => {
    this.setState({
      selected: key
    });
    console.log("test")
    message.info(`Click on item ${key}`);
  };
  
  render() {         
    const { country } = this.state;
    const user = 1;

    // Get list of countries
    let countryList = country.length > 0 && country.map((item, i) => {
      return (
        <Select.Option 
          key={item.country}
          value={item.country} 
          onClick={this.onClick}
        >
          {item.country_name}
        </Select.Option>
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
            <Button type="primary" htmlType="submit" block>{<a href={`post/${user}/${this.state.selected}`}>SEARCH</a>}</Button>        
          </div>
        </Col>
      </Row>
    );
  }
}

export default Home;

