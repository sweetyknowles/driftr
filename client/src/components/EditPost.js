import React, { Component } from 'react';
import { Form, Button, Input, TextArea } from 'semantic-ui-react';
import styled from 'styled-components';


const EditButtonStyled = styled.div`
button { 
font-family: EB Garamond;
color: white;
background-color: rgba(49, 170, 49, 0.7) !important;
text-transform: uppercase;
padding: 17.5px 40px;
margin-left: 10px;
}
`

const EditPostButton = styled.div`
#EditPostButton{
background-color: rgba(226, 212, 52, 0.7);
font-family: EB Garamond;
}
`



class EditPost extends Component {

    state = {
    
        editView: false,
    
    }


    toggleEditView = () => {
        this.setState({ editView: !this.state.editView })
    }

    render() {
        return (
            <div>
                <EditPostButton>
            <a  id="EditPostButton" onClick={() => this.toggleEditView()} class="waves-effect waves-light btn-large"><i class="material-icons right"></i>Edit Post </a>
            </EditPostButton>
            { this.state.editView
            ? <Form onSubmit={() => this.props.handleEditSubmit(this.props.post.id)}>
                <Form.Field>
                    <label>Title</label>
                    <Input
                        placeholder={this.props.post.title}
                        name="title"
                        type="text"
                        onChange={this.props.handleEditChange}
                        // value={this.props.post.title}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Text</label>
                    <TextArea cols="50" rows="200"
                        placeholder={this.props.post.text}
                        name="text"
                        type="text"
                        onChange={this.props.handleEditChange}
                        // value={this.props.post.text}
                    />
                </Form.Field>
                <EditButtonStyled>
                <Form.Button color="green" type="submit">Update Post</Form.Button>
                </EditButtonStyled>
            </Form>
            : null}
            </div>
        );
    }
}

export default EditPost;