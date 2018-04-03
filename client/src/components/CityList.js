import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const LinkStyle = styled.div`
h4 {
font-family: Philosopher;
}
p {
font-family: EB Garamond;
font-size: 25px;
}
`
const Introstyle = styled.div`
p2{

    font-family: EB Garamond;
    font-size: 25px;
    font-weight: Bold;  
    color: teal; 
    text-shadow:1px 1px black;
    }

`


class CityList extends Component {
    state = {
        cities: []
    }

    componentDidMount() {
        this.getAllCities()
    }

    getAllCities = async () => {
        const response = await axios.get('/api/cities')
        console.log(response.data.cities)
        this.setState({ cities: response.data.cities })
    }

    render() {
        return (

            <div>
            <Introstyle>
                <p2> 
                    Welcome Aboard!
                    <br/>
                    Explore and plan your next trip in cities below. 
                </p2>

            </Introstyle>
                {this.state.cities.map((city, i) => {
                    return (
                        <div>
                            <div key={i}>

                            </div>


                            <div class="parallax">
                                <Link to={`/cities/${city.id}`}>
                                    <img id="cityImage" src={city.image} alt="image here" />
                                </Link>
                            </div>
                            <div class="section white">
                                <div class="row container">
                                    <LinkStyle>
                                        <h4 class="header" id="mainTopText"><Link to={`/cities/${city.id}`}>{city.name}</Link></h4>
                                        <p class="grey-text text-darken-3 lighten-3" id="mainSubText">{city.description}</p>
                                    </LinkStyle>
                                    
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CityList;

const Imagewrapper = styled.div`
 margin: 0 auto
 display flex;
flex-direction: column;
justify-content: space-between;
background-repeat:no-repeat;
background-position: center center;
background-attachment: fixed;
align-items: center;

 img {

width: 70%;
 margin: 15px;
 padding: 15%;
 padding: 15px;
 box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2),
 0 6px 20px 0 rgba(0,0,0, 0.19)

 }
`
