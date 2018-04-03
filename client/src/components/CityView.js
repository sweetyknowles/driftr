import React, { Component } from 'react';
import axios from 'axios';
import NewPost from './NewPost';
import EditPost from './EditPost';
import styled from 'styled-components';


const ButtonDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 10px;

`

const DeleteButton = styled.div`
#DeleteButton {
font-family: EB Garamond;
background-color: rgba(209, 46, 46, 0.7);
margin-right: 15px;
}
`




const SwagBag = styled.div`
h1 {

font-family: Philosopher;
color: black;

}

h2, h4 {
    font-family: EB Garamond;
}

img {
  width: 65vw;
  height: 45vh;
  border: 6px solid rgb(51, 245, 196); 
}

#postBox {
margin-left: 12.5vw;
margin-bottom: 3.5vh;
max-width: 75%;
min-height: 200px;
background: rgba(255, 255, 255, 0.2);
border: 4px solid grey;
}
`


class CityView extends Component {
    state = {
        city: {},
        posts: [],
        post: {
            title: '',
            text: ''
        },
        newPost: {
            title: '',
            text: ''
        }
    }


    deletePost = async (postId) => {
        console.log(postId)

        const res = await axios.delete(`/api/cities/${this.props.match.params.id}/posts/${postId}/`)
        console.log(res)
        await this.getPosts()
    }

    createNewPost = async (event) => {
        event.preventDefault()
        const res = await axios.post(`/api/cities/${this.state.city.id}/posts`, this.state.newPost)
        const posts = [...this.state.posts, res.data]
        this.setState({
            posts,
            newPost: {
                title: '',
                text: ''
            }
        })
        await this.getPosts()
    }

    //NEW POST handle change
    handleChange = (event) => {
        const newPost = { ...this.state.newPost }
        const attribute = event.target.name
        newPost[attribute] = event.target.value
        this.setState({ newPost: newPost })
    }

    handleEditChange = (event) => {
        const updatedPost = { ...this.state.post }
        console.log(updatedPost)
        const attribute = event.target.name
        console.log(attribute)
        updatedPost[attribute] = event.target.value
        console.log(updatedPost[attribute])
        this.setState({ post: updatedPost })
        console.log(this.state.post)
    }
    handleEditSubmit = async (postId, event) => {
        const id = this.props.match.params.id
        const res = await axios.patch(`/api/cities/${id}/posts/${postId}/`, this.state.post)
        await this.getPosts()

    }

    componentDidMount() {
        this.getCity()
        this.getPosts()
    }


    getPosts = async () => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/cities/${id}/posts`)
        this.setState({ posts: res.data.posts })

    }

    getCity = async () => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/cities/${id}`)
        this.setState({ city: res.data.city })
    }

    render() {
        return (
            <div>
                <SwagBag>
                    <h1>{this.state.city.name}</h1>
                    <img src={this.state.city.image} alt={`Image of ${this.state.city.name}`} />
                    <h1>Posts</h1>
                    {this.state.posts.map((post, i) => {
                        return (
                            <div id="postBox">

                                <h2>{post.title}</h2>
                                <h4>{post.text}</h4>
                                <ButtonDiv>
                                <DeleteButton>
                                    <a id="DeleteButton" onClick={() => this.deletePost(post.id)} class="waves-effect waves-light btn-large"><i class="material-icons right"></i>Delete Post</a>
                                </DeleteButton>
                                
                                <EditPost post={post}
                                    handleChange={this.handleChange}
                                    handleEditSubmit={this.handleEditSubmit}
                                    handleEditChange={this.handleEditChange}
                                />
                                </ButtonDiv>
                                <br></br>
                                {/* <button onClick={() => this.deletePost(post.id)}>Delete Post</button> */}



                            </div>

                        )
                    })}
                </SwagBag>
                <NewPost handleChange={this.handleChange}
                    createNewPost={this.createNewPost}
                    posts={this.state.posts}
                    newPost={this.state.newPost} />

                        <br></br>
            </div>
        );
    }
}

export default CityView;


