import React, { Component } from 'react';
//import logo from './logo.svg';
import "./App.css";
import Dhheader from "./components/Dhheader"
import Logo from "./components/Logo"
import Navfooter from "./components/Navfooter"
import Footer from "./components/Footer"
import Navheader from "./components/Navheader"

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div id="header">
        	<Dhheader />
        	<Logo />
        	<Navheader />
        </div>
        
        <h1>路由视图容器,高版写法router+route</h1>
        
        <Navfooter />
        <Footer />
      </div>
    );
  }
}

export default App;
