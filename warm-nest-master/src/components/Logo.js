import React from "react";
import s1 from '../img/logo.png';

class Logo extends React.Component{
	constructor(props){
		super(props)
	}	

	
	render(){
		return(
			<div>
			  <h1 id="logo">
			    <a href="index.html">
			      <img src={s1} />
			    </a>
			    <span>Harbor House</span>
			  </h1>
			</div>
		)
	}	
}
export default Logo;