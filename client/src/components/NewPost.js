import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';



const ButtonStyling = styled.button`
color: white;
background-color: teal;
text-transform: uppercase;
padding: 17.5px 40px;

`

class NewPost extends Component {

    state = {
        newPostView: false
    }
// toggles form for the New form button
    toggleNewPost = () => {
        this.setState({ newPostView: !this.state.newPostView })
    }

    

    render() {
        return (
            <div>
                 <a onClick={this.toggleNewPost} class="waves-effect waves-light btn-large"><i class="material-icons right"></i>New Post</a>
               
            { this.state.newPostView ? <Form onSubmit={this.props.createNewPost}>
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

               <ButtonStyling type='submit'>Submit</ButtonStyling>
                
            </Form>

            : null}
            </div>
        );
    }
}

export default NewPost;