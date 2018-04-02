import React, { Component } from 'react';
import axios from 'axios'
import NewPost from './NewPost'



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
                <h1>{this.state.city.name}</h1>
                <img src={this.state.city.image} alt={`Image of ${this.state.city.name}`} />
                <h2>Posts</h2>
                {this.state.posts.map((post, i) => {
                    return (
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.text}</p>
                            
                            <button onClick={() => this.deletePost(post.id)}>Delete Post</button>
                        </div>
                    )
                })}
                <NewPost handleChange={this.handleChange}
                    createNewPost={this.createNewPost}
                    posts={this.state.posts}
                    newPost={this.state.newPost} />
            </div>
        );
    }
}

export default CityView;