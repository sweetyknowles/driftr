import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar'


class App extends Component {

  state = {
    cities: []
  }

  componentDidMount(){
    this.getAllCities()
  }

  getAllCities = async() => {
    const response = await axios.get('/api/cities')
    console.log(response.data.cities)
    this.setState({ cities: response.data.cities })
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        {this.state.cities.map(city => {
          return (
            <div>
              <a href={`/cities/${city.id}`}><h3>{city.name}</h3></a>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
