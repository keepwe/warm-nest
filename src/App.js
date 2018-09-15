import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import "./App.css";
import Dhheader from "./components/Header/Dhheader"
import Logo from "./components/common/Logo"
import Navfooter from "./components/footer/Navfooter"
import Footer from "./components/footer/Footer"
import Navheader from "./components/Header/Navheader"
import Home from "./page/Home"
import Cart from "./page/cart"
import Order from "./page/order"
import Fenye from "./page/Fenye"
import Liebiao from "./page/Liebiao"
import Xiangqing from "./page/Xiangqing"

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
        		<div>
	        	
	        		<Switch>
	        			<Route path="/home" component={Home}></Route>
	        			<Route path="/cart" component={Cart}></Route>
                <Route path="/order" component={Order}></Route>
	        			<Route path="/fenye" component={Fenye}></Route>
	        			<Route path="/liebiao" component={Liebiao}></Route>
	        			<Route path="/xiangqing" component={Xiangqing}></Route>
	        			<Redirect to="/home"/>
	        		</Switch>
        		</div>
        </Router> 
        <Navfooter />
        <Footer />
      </div>
    );
  }
}

export default App;
