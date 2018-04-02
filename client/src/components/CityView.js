import React, { Component } from 'react';
import axios from 'axios'

class CityView extends Component {
    state = {
        city: {},
        posts: []
    }


    componentDidMount(){
        this.getCity()
        this.getPosts()
    }


    getPosts = async() => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/cities/${id}/posts`)
        this.setState({ posts: res.data.posts })
        console.log(res.data.posts)

    }

    getCity = async() => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/cities/${id}`)
        this.setState({ city: res.data.city })
    }

    render() {
        return (
            <div>
                <h1>{this.state.city.name}</h1>
                <img src={this.state.city.image} alt={`Image of ${this.state.city.name}`}/>
                <h2>Posts</h2>
                {this.state.posts.map((post,i) => {
                    return(
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.text}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CityView;