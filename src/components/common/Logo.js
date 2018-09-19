import React from "react";
import l1 from '../../img/logo.png';

class Logo extends React.Component{
	render(){
		return(
			<div>
			  <h1 id="logo">
			    <a href="/home">
			      <img src={l1} alt="logo"/>
			    </a>
			    <span>Harbor House</span>
			  </h1>
			</div>
		)
	}	
}
export default Logo;