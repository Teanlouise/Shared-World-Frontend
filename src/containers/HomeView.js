import { Menu, Dropdown, Icon, message, List, Card, Avatar, Select, Button, Row, Col} from 'antd';
import React, {Component} from 'react';
import axios from 'axios';
import { OmitProps } from 'antd/lib/transfer/renderListBody';
import { gapi, loadAuth2 } from 'gapi-script';

// const { Meta } = Card;
const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
    // SENT POST REQUEST TO DATAPROC

    axios.post(
      'https://dataproc.googleapis.com/v1/projects/shared-world/regions/us-central1/jobs:submit?key={AIzaSyDyKYoLZP3Cdy8D4haLEULA2HQzEO1zMHo}',
      {
        "access_token": "ya29.Il-UBxzkcu7bNx9D0EFQ2iUkz_k1G7Q1JnpJI5yzXKM1lolumMoMlC4NQebgdg3dIKk4d5FH5LUn72tW46cgpA4Y6Zsc6Rt56wZiT2pHrPe69rh5jOk-xA6QcWwT5gSrxA", 
        "scope": "https://www.googleapis.com/auth/cloud-platform", 
        "token_type": "Bearer", 
        "expires_in": 3600, 
        "refresh_token": "1/X3IHayF3JEN2iU4eBCG45viRMY7PqNYk86r-PcgrrwieHOwk3SBhRJVk75GRuXqK",

        "projectId": "shared-world",
        "job": {
          "reference": {
            "jobId": "job-a04fb44n"
          },
          "placement": {
            "clusterName": "cluster-1"
          },
          
          "jobUuid": "74b04083-c60c-4daf-a7fd-07e269282b68",
          "sparkJob": {
            "mainJarFileUri": "gs://shared-world-dataproc/spark-final_2.12-0.1.jar",
            "jarFileUris": [
              "gs://shared-world-dataproc/postgresql-42.2.5.jar"
            ],
            "args": [
              "AU",
              3              
            ]
          }
        }
      })
      .then(res => { 
        console.log(res);
        console.log(res.data);  
      })
  };


class Home extends React.Component {

  state = {
    country: []
  }
  
  async componentDidMount() {
    const clientId = "41751965969-in1gmn1mfcidn9df7oqbq7tm2ju45ssi.apps.googleusercontent.com"
    const scopes = "https://www.googleapis.com/auth/cloud-platform"
    const auth2 = loadAuth2(clientId, scopes);
    console.log()
    
    axios.get('https://shared-world.appspot.com/api/country/')
      .then(res => {
        this.setState({
          country: res.data
        });
      })
  }
  
  render() {         
    const { country } = this.state;

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
    {/* MAPS API TO GO HERE */}
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
        <Button type="primary" htmlType="submit" block onClick={onClick}>{<a href={'post/'}>SEARCH</a>}</Button>        
      </div>
    </Col>
</Row>    


    );
  }
}

export default Home;

