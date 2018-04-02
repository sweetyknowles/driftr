import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



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
                {this.state.cities.map((city, i) => {
                    return (
                        <div>
                            <div key={i}>

                            </div>
                         
                                <div class="parallax">
                                <div data-aos="fade-up" data-aos-easing="ease-in-quad" data-aos-once="true" data-aos-duration='700'>
                                <img id="cityImage" src={city.image} alt="image here"/></div>
                                </div>
                            <div class="section white">
                                <div class="row container">
                                    <h4 class="header" id="mainTopText"><a href={`/cities/${city.id}`}>{city.name}</a></h4>
                                    <p class="grey-text text-darken-3 lighten-3" id="mainSubText">Click on the city name to get more information about it!</p>
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
