import { message, Select, Button, Row, Col} from 'antd';
import React from 'react';
import axios from 'axios';
import { Chart } from "react-google-charts";
import SelectCountryImage from '../start.png';


class Home extends React.Component {

  state = {
    selected: "ZZ",
    country: []
  }
  
  componentDidMount() {
    // this.props.user;
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
        <Chart
          //width={'500px'}
          height={'600px'}
          chartType="GeoChart"
          //spreadSheetUrl="https://docs.google.com/spreadsheets/d/1sNbLvMuOM4Zcujlqw90At_S8a65QV9MQ7GWXB5ko-Tk/edit#gid=744431261"
          data={[
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['Russia', 700],
          ]}
          mapsApiKey="AIzaSyDyKYoLZP3Cdy8D4haLEULA2HQzEO1zMHo"
          //rootProps={{ 'data-testid': '1' }}
        
          options={{
   // sizeAxis: { minValue: 0, maxValue: 100 },
    colorAxis: { colors: ['#e7711c', '#4374e0'] }, // orange to blue
    //datalessRegionColor: '#f8bbd0',
    defaultColor: '#f5f5f5',
  }}
/>
          
        </Col>
        <Col span={6} pull={18}>
          <div>
          <img center src={SelectCountryImage} alt="start"/>
            <Select                     
              style={{ width: 400 }}
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
