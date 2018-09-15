import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom"
import "./App.css";
import Dhheader from "./components/Header/Dhheader"
import Logo from "./components/common/Logo"
import Navfooter from "./components/footer/Navfooter"
import Footer from "./components/footer/Footer"
import Navheader from "./components/Header/Navheader"
import Home from "./page/Home"
import Gouwuche from "./page/Gouwuche"
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
	        		<Link to="/home"></Link>
	        		<Link to="/gowuche"></Link>
	        		<Link to="/fenye"></Link>
	        		<Link to="/liebiao"></Link>
	        		<Link to="/xiangqing"></Link>	
	        		<Switch>
	        			<Route path="/home" component={Home}></Route>
	        			<Route path="/gouwuche" component={Gouwuche}></Route>
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
