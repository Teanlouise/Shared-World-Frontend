import React from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';
import CustomForm from '../components/Form';
import { List, Avatar, Icon, Row, Col} from 'antd';

import Posts from '../components/Posts';

const { Meta } = Card;

// class ProfileDetail extends React.Component {

//   state = {
//     profile: [],
//     //post: []
//   }

//   componentDidMount() {
//     const profileUSER= this.props.match.params.profileUSER;
//     const profileUSERNAME = this.props.match.params.profileUSERNAME;

//     axios.all([
//       axios.get(`http://127.0.0.1:8000/api/profile/${profileUSER}`),
//       axios.get(`http://127.0.0.1:8000/api/post/user/${profileUSERNAME}`)
//     ])    
//     .then(axios.spread((profile, post) => {
//         this.setState({
//           profile: profile.data,
//          // post: post.data
//         });
//       })
//     )
//   }

//   render() {
//       const current = this.state.profile;
//         return (
// <div>
// <Row>

// {/* List of Profile's Post */}
//   <Col span={18} push={6}>
//     <Posts data={this.state.post} />                
//   </Col>

//   {/* Author Profile */}
//     <Col span={6} pull={18}>
//       <Card 
//         style={{ width: 300, textAlign: 'center' }}
//         cover={ <img src={current.user_image} /> }
//       >
//         <Meta                  
//           title={current.username}
//           description={current.user_bio}
//         />
//       </Card>  
//     </Col>
//   </Row>
// </div>
//     )
//   }
// }

// export default ProfileDetail;





// JUST PROFILE WORKS
// class ProfileDetail extends React.Component {

//   state = {
//     profile: []
//   }

//   componentDidMount() {
//     const profileUSER= this.props.match.params.profileUSER;

//     axios.get(`http://127.0.0.1:8000/api/profile/${profileUSER}`)     
//     .then ( res => {
//         this.setState({
//           profile: res.data
//         });
//       })    
//   }

//   render() {
//       const current = this.state.profile;
//         return (
// <div>

//       <Card 
//         style={{ width: 300, textAlign: 'center' }}
//         cover={ <img src={current.user_image} /> }
//       >
//         <Meta                  
//           title={current.username}
//           description={current.user_bio}
//         />
//       </Card>  
// </div>
//     )
//   }
// }

// export default ProfileDetail;



// TRYING TO GET USER POSTS
class ProfileDetail extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {
    const userid = this.props.match.params.profileUserId;

    axios.get(`https://shared-world.appspot.com/api/post/user/${userid}`)
    .then ( res => {
      console.log("asdf")
      console.log(res)
        this.setState({
          posts: res.data
        });
      })
  }

  render() {
    return (
      <div>
        <Col span={18} push={6}>
          <Posts data={this.state.posts} />
        </Col>
      </div>
    )
  }
}

export default ProfileDetail;