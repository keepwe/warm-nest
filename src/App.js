import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom"
import "./App.css";
import Dhheader from "./components/Header/Dhheader"
import Logo from "./components/common/Logo"
import Navfooter from "./components/footer/Navfooter"
import Footer from "./components/footer/Footer"
import Navheader from "./components/Header/Navheader"
import Home from "./page/Home"

class App extends Component{
  render() {
    return (
      <div className="App">
      	<div id="header">
        	<Dhheader />
        	<Logo />
        	<Navheader />
        </div>  
        <Router>
        	<Home /> 
        </Router>
        <Navfooter />
        <Footer />
      </div>
    );
  }
}

export default App;
