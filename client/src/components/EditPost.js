import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react'



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
            <a onClick={() => this.toggleEditView()} class="waves-effect waves-light btn-large"><i class="material-icons right"></i>Edit Post</a>

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
                    <Input
                        placeholder={this.props.post.text}
                        name="text"
                        type="text"
                        onChange={this.props.handleEditChange}
                        // value={this.props.post.text}
                    />
                </Form.Field>
                
                <Form.Button color="green" type="submit">Edit Post</Form.Button>
            </Form>
            : null}
            </div>
        );
    }
}

export default EditPost;