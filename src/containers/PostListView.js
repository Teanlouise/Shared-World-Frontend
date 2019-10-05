import React from 'react';
import axios from 'axios';
import Posts from '../components/Posts';

class PostList extends React.Component {

    state = {
        post: []
    }

    // This needs to be changed to be the selected posts
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/post/')
            .then(res => {
                this.setState({
                    post: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <Posts data={this.state.post} />
                <br />
            </div>
        )
    }
}

export default PostList;