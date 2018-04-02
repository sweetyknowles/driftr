import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'




class NewPost extends Component {

    state = {
        newPostView: false
    }

    toggleNewPost = () => {
        this.setState({ newPostView: !this.state.newPostView })
    }

    

    render() {
        return (
            <div>
                <button onClick={this.toggleNewPost}>New Post</button>
            { this.state.newPostView

        
            ? <Form onSubmit={this.props.createNewPost}>
                <Form.Field>

                    <label>Post Title</label>
                    <input placeholder='Title'
                        name="title"
                        value={this.props.newPost.title}
                        onChange={this.props.handleChange} />

                </Form.Field>
                <Form.Field>

                    <label>Post Text</label>
                    <input placeholder='Text' name="text"
                        value={this.props.newPost.text}
                        onChange={this.props.handleChange} />

                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>

            : null}
            </div>
        );
    }
}

export default NewPost;