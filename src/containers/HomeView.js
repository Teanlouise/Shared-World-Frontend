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
        <Col 
          span={18} push={6}
          style={{padding: '10px'}}
        >
          <Chart
            //width={'500px'}
            height={'550px'}
            chartType="GeoChart"
            legend={{textAlign: 'center'}}
            mapsApiKey="AIzaSyDyKYoLZP3Cdy8D4haLEULA2HQzEO1zMHo"
            options={{    
              colorAxis: { colors: ['#FF8C00', '#FF0000', '#FF00FF', '#8F00FF', '#002366'] }, // orange to blue
              defaultColor: '#f5f5f5',
              //datalessRegionColor: '#f8bbd0',              
            }}
            data={[
              ['Country', '%'],         
              ['Iceland', 648],
              ['Malta', 486],
              ['Croatia', 378],
              ['Bahamas', 377],
              ['Hong Kong', 377],
              ['Seychelles', 365],
              ['Austria', 355],
              ['Maldives', 280],
              ['Greece', 253],
              ['Estonia', 246],
              ['Ireland', 215],
              ['Denmark', 204],
              ['Spain', 176],
              ['Georgia', 174],
              ['Albania', 162],
              ['Portugal', 150],
              ['France', 130],
              ['Norway', 118],
              ['Italy', 96],
              ['Fiji', 96],
              ['New Zealand', 74],
              ['Sweden', 70],
              ['Namibia', 62],
              ['Costa Rica', 60],
              ['Canada', 57],
              ['United Kingdom', 57],
              ['Thailand', 51],
              ['Turkey', 46],
              ['Germany', 45],
              ['Kazakstan', 23],
              ['Australia', 36],
              ['Cambodia', 35],
              ['Chile', 35],
              ['Mexico', 35],
              ['United States', 23],
              ['Japan', 23],
              ['South Africa', 18],
              ['Russia', 17],
              ['Zimbabwe', 23],
              ['Argentina', 15],
              ['Mongolia', 23],
              ['Philippines', 6],
              ['Iran', 6],
              ['Indonesia', 5],
              ['China', 4],
              ['Brazil', 3],
              ['Nepal', 23],
              ['Tanzania', 2],
              ['Venezuala', 1],
              ['India', 1],
            ]} 
          />
          <h1 style={{marginLeft:'40px'}}>
            Tourist-to-Resident Ratio
          </h1>          
        </Col>

        <Col 
          span={6} pull={18}
          style={{ padding:'100px', textAlign: 'center'}}
        >
          <img center src={SelectCountryImage} alt="start"/>
          <Select                     
            style={{ width: 400 }}
            placeholder="Select a country"
          >
            {countryList}
          </Select>
          <br />
          <br />

          <Button type="primary" htmlType="submit">
            {<a href={`post/${user}/${this.state.selected}`}>SEARCH</a>}
          </Button> 
        </Col>

      </Row>
    );
  }
}

export default Home;