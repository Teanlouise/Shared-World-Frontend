import React from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'antd';
import CustomForm from '../components/Form';

const { Meta } = Card;

class PostDetail extends React.Component {

    state = {
        post: []
    }

    componentDidMount() {
        const postID = this.props.match.params.postID;
        axios.get(`https://shared-world.appspot.com/api/post/${postID}`)
            .then(res => {
                this.setState({
                    post: res.data
                });
            })
    }

    handleDelete = (event) => {
        const postID = this.props.match.params.postID;
        axios.delete(`https://shared-world.appspot.com/api/post/${postID}`)
    }

    render() {
        // Set constants to access all data of post and author
        const current = this.state.post;
        const author = current.author;
        const username = author && author.username;
        const user_image = author && author.user_image;
        const user = author && author.user;
        const user_bio = author && author.user_bio;
        const user_website = author && author.user_website;
        const user_interests = author && author.user_interests;

        return (
            <div>
            <Row>

            {/* Details of Post */}
              <Col span={18} push={6}>
                <Card
                title={<h1> {current.title}</h1>}
                style={{textAlign:'center'}}
                > 
                    <Card.Grid style={{width: '100%', padding:'-100px', textAlign: 'center'}}> 
                        <Meta
                        title={current.country && current.country.country_name}
                        description={<p style={{fontStyle: "Italic"}}> Interests: {current.interests && current.interests[0]}, {current.interests && current.interests[1]}, {current.interests && current.interests[2]} </p>}
                        />
                    </Card.Grid>               
                    
                    <Card.Grid style={{width: '100%'}} bordered={true}> 
                        <Col span={16} pull={0}>
                            <p> {current.content} </p>                        
                        </Col>
                        <Col span={4} push={1}>
                            <img src={current.image} alt="post_image"/>
                        </Col> 
                    </Card.Grid> 
                </Card>
        
                         {/* <CustomForm
                            requestType="put"
                            postID={this.props.match.params.postID}
                            btnText="Update"
                        />
                        <form onSubmit={this.handleDelete}>
                            <Button type="danger" htmlType="submit">Delete</Button>
                        </form>       */}
              </Col>

            {/* Author Profile */}
                <Col span={6} pull={18}>
                    <Card 
                        style={{ width: 300,textAlign: 'center', border: '5px solid black' }}
                        cover={ <img src={user_image} alt="user_image"/> }
                    >
                        <Meta                  
                        title={<h1> {username} </h1>}  
                        description=' '
                        />      
                        <p>{user_bio} </p>
                        <p>{user_website}</p>
                        <p style={{fontStyle: 'italic'}}>Interests: {user_interests && user_interests[0]}, {user_interests && user_interests[1]}, {user_interests && user_interests[2]} </p>
                    </Card> 
                </Col>
            </Row>
          </div>
        )
    }
}

export default PostDetail;