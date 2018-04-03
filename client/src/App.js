import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import CityView from "./components/CityView";
import CityList from "./components/CityList";
import EditPost from "./components/EditPost";
import About from "./components/About";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

//App.js is the centerpiece of the application. Here are the references to the components and dependencies we will be using. 

// 


class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={CityList} />
            <Route exact path="/cities/:id" component={CityView} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cities/:id/edit" component={EditPost} />
          </Switch>
          <Footer />
        </div>


      </Router>


    );
  }
}

export default App;
