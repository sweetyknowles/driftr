import React, { Component } from 'react';
import axios from 'axios'
import NewPost from './NewPost'

import styled from 'styled-components'

const SwagBag = styled.div`
h1 {
font-family: Philosopher;
color: darkgray;
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
        newPost: {
            title: '',
            text: ''
        }
    }

    deletePost = async(postId) => {
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

    handleChange = (event) => {
        const newPost = { ...this.state.newPost }
        const attribute = event.target.name
        newPost[attribute] = event.target.value
        this.setState({ newPost: newPost })
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
                            <a onClick={() => this.deletePost(post.id)} class="waves-effect waves-light btn-large"><i class="material-icons right"></i>Delete Post</a>
                            {/* <button onClick={() => this.deletePost(post.id)}>Delete Post</button> */}


                        </div>

                    )
                })}
            </SwagBag>
                <NewPost handleChange={this.handleChange}
                    createNewPost={this.createNewPost}
                    posts={this.state.posts}
                    newPost={this.state.newPost} />
            </div>
        );
    }
}

export default CityView;


