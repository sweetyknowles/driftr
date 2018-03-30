import React, { Component } from 'react';
import axios from 'axios'

class CityView extends Component {


    componentDidMount(){
        this.getCity()
    }

    getCity = async() => {
        const name = this.props.match.params.id
        const res = await axios.get(`/api/cities/${name}`)

    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default CityView;