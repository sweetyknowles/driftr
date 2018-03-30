import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
    <Router>
    return (
      <div className="App">
        <NavBar/>
        <Switch>
        {this.state.cities.map(city => {
          return (
            <div>
              <a href={`/cities/${city.id}`}><h3>{city.name}</h3></a>
            </Switch>
            </div>
          )
        })}
      </div>
      </Router>
    );
  }
}

export default App;
