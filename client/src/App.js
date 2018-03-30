import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar'


class App extends Component {

  componentDidMount(){
    this.getAllCities()
  }

  getAllCities = async() => {
    const response = await axios.get('/api/cities')
    console.log(response.data.cities)
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    );
  }
}

export default App;
