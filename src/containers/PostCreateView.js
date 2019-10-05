import React from 'react';
import CustomForm from '../components/Form';

class PostCreate extends React.Component {

    render() {
        return (
            <div>
                <h2> Create an article</h2>
                <CustomForm
                    requestType="post"
                    postID={null}
                    btnText="Create"
                />
            </div>
        )
    }
}

export default PostCreate;