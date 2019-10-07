import React from 'react';
import axios from 'axios';
import Posts from '../components/Posts';

class PostList extends React.Component {

    state = {
        post: []
    }

    // This needs to be changed to be the selected posts
    componentDidMount() {
        //axios.get('https://shared-world.appspot.com/api/post') 
        const user = 2
        const country = AU       
        axios.get(`https://shared-world-dataproc.storage.googleapis.com/order/${user}/${country}/result.json`)
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