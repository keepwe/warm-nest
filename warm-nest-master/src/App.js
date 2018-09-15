
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom'

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
import Section from "./components/section"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
               <Dhheader/>
               <Logo/>
               <Navheader/>
               <Cart/>
               <Section/>
              <Switch>
                  
                  <Route path="/cart" component={Cart}></Route>
                  <Route path="/order" component={Order}></Route>
                  <Route path="/section" component={Section}></Route>
                  
                  
              </Switch>
              <Navfooter/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
