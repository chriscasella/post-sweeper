import React, { Component } from "react";
//import { Switch, Route } from "react-router-dom";
import HomeContainer from "./containers/Home/HomeContainer";
import logo from './logo.svg';
import './App.css';


class App extends Component { 
  render() {
    return (
      <div className="App">
      <HomeContainer />
      </div>
    );
  }
}

export default App;
