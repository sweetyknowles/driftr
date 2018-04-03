import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const IntroBoxLander= styled.div`
#LanderImg {
border: 4px solid rgba(0, 230, 184, 0.5);
min-width: 100vw;
max-height: 92.75vh;
}
`


const CityNameStyler = styled.div`
#CityName {
    text-decoration: none;
    

}
`

const BackgroundWrapper = styled.div`
.section-white, .row-container {
    background-color: white;


}
`

const TextStyle = styled.div`
h4 {
font-family: Philosopher;
text-decoration: none;
font-size: 65px;
color: black;
text-decoration: none;
}
p {
font-family: EB Garamond;
font-size: 25px;
}
padding: 20px;
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
            <IntroBoxLander>
            <img id="LanderImg" src="https://i.imgur.com/bwVjZFm.jpg" alt="drift lander" />
        </IntroBoxLander>


           
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
                                    <TextStyle>
                                        <h4 class="header" id="mainTopText">{city.name}</h4>
                                        <p class="grey-text text-darken-3 lighten-3" id="mainSubText">{city.description}</p>
                                    </TextStyle>
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
