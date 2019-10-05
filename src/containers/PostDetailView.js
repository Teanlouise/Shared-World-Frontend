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
        //const title = current.title;
       // const content = current.content;
        //const description = current.description;

        return (
            <div>
            <Row>

            {/* Details of Post */}
              <Col span={18} push={6}>
                <Card title={current.title}>
                    <p> {current.content} </p>
                </Card>
        
                        {/* <CustomForm
                            requestType="put"
                            postID={this.props.match.params.postID}
                            btnText="Update"
                        />
                        <form onSubmit={this.handleDelete}>
                            <Button type="danger" htmlType="submit">Delete</Button>
                        </form> */}        
              </Col>

            {/* Author Profile */}
                <Col span={6} pull={18}>
                    <Card                  
                        style={{ width: 300, height: 300, textAlign: 'center' }}
                        cover={<img src={user_image}/>}
                    >
                      <Meta                  
                          title={<a href={`/user/${user}`}>{username}</a>}
                          description={user_bio}
                        />
                    </Card> 
                </Col>
            </Row>
          </div>
        )
    }
}

export default PostDetail;