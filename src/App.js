import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import About from "./About";
import Splash from "./Splash";

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Splash></Splash>
        <About></About>
      </div>
    );
  }
}

export default App;
