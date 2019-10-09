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
  
      axios.all([
        axios.get(`http://shared-world.appspot.com/api/profile/${userID}`),
        axios.get(`http://shared-world.appspot.com/api/post/user/${userID}`)
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
            style={{ width: 300, textAlign: 'center' }}
            cover={ <img src={this.state.profile.user_image} alt="user_image"/> }
          >
          <Meta                  
            title={this.state.profile.username}
            description={this.state.profile.user_bio}
          />
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














