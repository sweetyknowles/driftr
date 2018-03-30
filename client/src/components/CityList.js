import React, { Component } from 'react';
import axios from 'axios'

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
                            <a href={`/cities/${city.name}`}><h3>{city.name}</h3></a>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CityList;