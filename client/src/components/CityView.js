import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const SwagBag = styled.div`
h1 {
font-family: Philosopher;
}
h2, h4 {
    font-family: EB Garamond;
}

#postBox {
margin-left: 12.5vw;
margin-bottom: 3.5vh;
max-width: 75%;
min-height: 200px;
background: rgba(255, 255, 255, 0.2);
border: 3px solid grey

}
`

class CityView extends Component {
    state = {
        city: {},
        posts: []
    }


    componentDidMount() {
        this.getCity()
        this.getPosts()
    }


    getPosts = async () => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/cities/${id}/posts`)
        this.setState({ posts: res.data.posts })
        console.log(res.data.posts)

    }

    getCity = async () => {
        const id = this.props.match.params.id
        const res = await axios.get(`/api/cities/${id}`)
        this.setState({ city: res.data.city })
    }

    render() {
        return (
            <SwagBag>
                <h1>{this.state.city.name}</h1>
                <img src={this.state.city.image} alt={`Image of ${this.state.city.name}`} />
                <h1>Posts</h1>
                {this.state.posts.map((post, i) => {
                    return (
                        <div id="postBox">

                            <h2>{post.title}</h2>
                            <h4>{post.text}</h4>
                        </div>

                    )
                })}
            </SwagBag>
        );
    }
}

export default CityView;


