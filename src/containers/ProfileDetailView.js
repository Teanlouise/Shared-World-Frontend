import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { Row, Col} from 'antd';

import Posts from '../components/Posts';

const { Meta } = Card;

class ProfileDetail extends React.Component {

  state = {
    posts: [],
    profile: []
  }

  componentDidMount() {
    const userID = this.props.match.params.profileUserID;
    const userID2 = this.props.match.params.profileUserID -4;
  
      axios.all([
        axios.get(`https://shared-world.appspot.com/api/profile/${userID}`),
        axios.get(`https://shared-world.appspot.com/api/post/user/${userID2}`)
      ])    
      .then(axios.spread((profile, post) => {
          this.setState({
            profile: profile.data,
            posts: post.data
          });
        })
      )
    }

  render() {
    
    return (
      <div>
      <Row>
      {/* List of Profile's Post */}
        <Col span={18} push={6}>
          <Posts data={this.state.posts} />                
        </Col>

      {/* Author Profile */}
        <Col span={6} pull={18}>
          <Card 
            style={{ width: 300,textAlign: 'center', border: '5px solid black' }}
            cover={ <img src={this.state.profile.user_image} alt="user_image"/> }
          >
            <Meta                  
              title={<h1> {this.state.profile.username} </h1>}
              description=' '     
            />
            <p>{this.state.profile && this.state.profile.user_bio}</p>
            <p>{this.state.profile.user_website}</p>
            <p style={{fontStyle: 'italic'}}>Interests: {this.state.profile.user_interests && this.state.profile.user_interests[0]}, {this.state.profile.user_interests && this.state.profile.user_interests[1]}, {this.state.profile.user_interests && this.state.profile.user_interests[2]} </p>
          </Card>  
        </Col>
      </Row>
      </div>
    )
  }
}

export default ProfileDetail;


// componentWillReceiveProps(newProps) {
//   if (newProps.token) {      
//     axios.defaults.headers = {
//       "Content-Type": "application/json",
//       Authorization: newProps.token,
//       Username: newProps.username
//     }    