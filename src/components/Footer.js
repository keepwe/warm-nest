import React from "react";

class Footer extends React.Component{
	constructor(props){
		super(props)
	}	
	render(){
		return(
			<div>
			  <div id="footer" className="clearfix fl">
			  <div className="navFooterLine">
			    <div className="container clearfix">
			      <ul>
			        <li><a target="_blank" href="">关于我们</a></li>
			        <li><a target="_blank" href="">品牌新闻</a></li>
			        <li><a target="_blank" href="">招聘信息</a></li>
			        <li><a target="_blank" href="">客服中心</a></li>
			        <li><a target="_blank" href="">帮助中心</a></li>
			        <li><a target="_blank" href="">联系我们</a></li>
			        <li><a target="_blank" href="">全国门店</a></li>
			        <li><a target="_blank" href="">在线目录</a></li>
			        <li><a target="_blank" href="">网站地图</a></li>
			      </ul>
			    </div>
			  </div>
			  <div className="copyright">
			    <div className="container clearfix">
			      <p> Harbor House 安美西石贸易（浙江）有限公司版权所有 <span><a href="#">浙ICP备07505498号</a></span></p>
			    </div>
			  </div>
			  </div>
			</div>
		)
	}
	
	
}
export default Footer;