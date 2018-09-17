import React from "react";

class Dhheader extends React.Component{
	tap1(){
		this.props.history.push("/login")
	}
	tap2(){
		this.props.history.push("/register")
	}
	render(){
		return(
			<div>
			  <div id="topnav">
			    <div className="container clearfix">
			      <ul className="siteNav fl">
			        <li className="siteNav_new">
			          <a href="/">新 品 <strong className="fontRed">new</strong> </a>
			        </li>
			        <li className="siteNav_sale">
			          <a href="/">促 销 <strong className="fontRed">sale</strong> </a>
			        </li>
			        <li className="siteNav_spaceguide">
			          <a href="/">空 间 指 引 </a>
			        </li>
			        <li className="siteNav_sale">
			          <a href="/">the american taste </a>
			        </li>
			        <li className="siteNav_sale">
			          <a href="/">home + </a>
			        </li>
			      </ul>
			      <ul className="siteNav fr">
			        <li id="username">您好，欢迎来到 HARBOR HOUSE！</li>
			        <li id="tc" className="hide">退出</li>
			        <li id="login">
			        	<a href="">
			        		<span onClick={this.tap1.bind(this)}>登录/</span>
			        		<span onClick={this.tap2.bind(this)}>注册</span>
			        	</a>
			        </li>
			        <li><a href="/">
			          <span className="news_icon"></span>联系客服</a>
			        </li>
			        <li className="last" id="cart"><a href="/cart">
			          <span className="shopping_icon"></span>购物车</a>
			        </li>
			      </ul>
			    </div>
			  </div>
			</div>
		)
	}
	
	
}
export default Dhheader;