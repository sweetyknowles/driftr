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
                {this.state.cities.map((city,i) => {
                    return (
                        <div key={i}>
                            <a href={`/cities/${city.id}`}><h3>{city.name}</h3></a>
                            <Imagewrapper>
                            <img src ={city.image}/>
                            </Imagewrapper>
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