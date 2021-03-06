import React from "react";

class Navheader extends React.Component{
	render(){
		return(
			<div>
			  <div id="navwrapper" className="clearfix">
			    <div id="nav">
			      <dl>
			        <dt className="first">
			          <a href="/fenye">家具</a>
			        </dt>
			        <dd></dd>
			      </dl>
			      <dl>
			        <dt><a href="/fenye">灯具 & 墙饰</a></dt>
			        <dd></dd>
			      </dl>
			      <dl>
			        <dt>
			          <a href="/fenye">
			            窗帘 & 地毯</a>
			        </dt>
			        <dd></dd>
			      </dl>
			      <dl>
			        <dt>
			          <a href="/fenye">
			            家纺</a>
			        </dt>
			        <dd></dd>
			      </dl>
			      <dl>
			        <dt>
			          <a href="/fenye">装饰品</a></dt>
			        <dd></dd>
			      </dl>
			      <dl>
			        <dt><a href="/fenye">餐厨用品</a></dt>
			        <dd></dd>
			      </dl>
			      <dl>
			        <dt>
			          <a href="/fenye">儿童</a></dt>
			        <dd></dd>
			      </dl>
			      <div className="search_all">
		        	<span className="ibefore"></span>
		        	<input id="searchtext" type="text" defaultValue=""  maxLength="60"  autoComplete="off"/>
		        	<button type="button" className="button">搜索</button>
		        	<span className="iafter"></span>
		        	<div className="search_menu hide">
			        <span className="navArrowTop_gray"></span>
			        <ul></ul>
			       </div>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
	
	
}
export default Navheader;