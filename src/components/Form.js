import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, postID) => {
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch (requestType) {
            case 'post':
                return axios.post('https://shared-world.appspot.com/api/post', {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(error => console.err(error));
            case 'put':
                return axios.put(`https://shared-world.appspot.com/api/post/${postID}/`, {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(error => console.err(error));
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.requestType,
                    this.props.articleID)}>
                    <Form.Item label="Title" >
                        <Input name="title" placeholder="Put a title here" />
                    </Form.Item>
                    <Form.Item label="Content" >
                        <Input name="content" placeholder="enter some content" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm;