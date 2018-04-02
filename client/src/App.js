import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import CityView from "./components/CityView";
import CityList from "./components/CityList";






class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/" component={CityList}/>
            <Route exact path="/cities/:id" component={CityView}/>
          </Switch>
        </div>
        
        
      </Router>
      
    );
  }
}

export default App;
