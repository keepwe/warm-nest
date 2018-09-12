
import React, { Component } from 'react';
import {Router,Route,hashHistory,IndexRoute,IndexRedirect,Redirect} from 'react-router';
//import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import $ from "jquery"

//import logo from './logo.svg';
import "./App.css";
import Dhheader from "./components/Dhheader"
import Logo from "./components/Logo"
import Navfooter from "./components/Navfooter"
import Footer from "./components/Footer"
import Navheader from "./components/Navheader"

import Cart from "./components/cart"
import Order from "./components/order"


class App extends Component {
  render() {
    return (
      <div className="App">
      	<div id="header">
        	<Dhheader />
        	<Logo />
        	<Navheader />
        </div>



        <section>
          
           <Order/>
            
        </section>




        
        
        
        <Navfooter />
        <Footer />
      </div>
    );
  }
}

export default App;
