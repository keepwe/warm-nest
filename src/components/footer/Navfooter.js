import React from "react";
import s1 from '../../img/Wechat.jpg';
import s2 from '../../img/tweet.jpg';

class Navfooter extends React.Component{
	constructor(props){
		super(props)
	}	
	render(){
		return(
			<div>
			  <div className="navFooter">
				<div className="container clearfix">
				    <dl className="navFooter_list fl">
				      <dt>新手上路</dt>
				      <dd>
				        <ul>
				          <li><a target="_blank" href="">购物流程</a></li>
				          <li><a target="_blank" href="">找回密码</a></li>
				          <li><a target="_blank" href="">订单查询</a></li>
				          <li><a target="_blank" href="">在线目录</a></li>
				          <li><a target="_blank" href="">发票制度</a></li>
				        </ul>
				      </dd>
				    </dl>
				    <dl className="navFooter_list fl">
				      <dt>帮助中心</dt>
				      <dd>
				        <ul>
				          <li><a target="_blank" href="">支付方式</a></li>
				          <li><a target="_blank" href="">配送说明</a></li>
				          <li><a target="_blank" href="">售后服务</a></li>
				          <li><a target="_blank" href="">常见问题</a></li>
				          <li><a target="_blank" href="">家具保养</a></li>
				        </ul>
				      </dd>
				    </dl>
				    <dl className="navFooter_list fl">
				      <dt>客户服务</dt>
				      <dd>
				        <ul>
				          <li><a target="_blank" href="">会员介绍</a></li>
				          <li><a target="_blank" href="">全国门店</a></li>
				          <li><a target="_blank" href="">软装设计</a></li>
				          <li><a target="_blank" href="">会员活动</a></li>
				          <li><a target="_blank" href="">客诉受理</a></li>
				        </ul>
				      </dd>
				    </dl>
				
				    <div className="special fl">
				      <dl>
				        <dt><img src={s1} /></dt>
				        <dd><a href="#">关注官方微信</a></dd>
				      </dl>
				      <dl>
				        <dt><img src={s2} /></dt>
				        <dd><span className="sinaIcon"></span>官方微博</dd>
				      </dl>
				    </div>
				    <div className="integrated fr">
				      <strong className="phone_number">400-888-1916</strong>
				      <dl className="search autoWidth">
				        <dt>
				          <label><input id="searchbox_foot" maxLength="60" type="text" className="allSearch" />
				            <button type="button" className="search_btn">搜索
				            </button>
				          </label>
				        </dt>
				        <dd></dd>
				      </dl>
				      <ul>
				        <li className="video"><a target="_blank" className="fl" href=""><span className="videoIcon fl"></span>Harbor House Life</a>
				        </li>
				        <li className="design"><a target="_blank" href=""><span className="designIcon fl"></span>申请软装设计<strong>Design
				          Application</strong></a></li>
				      </ul>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
	
	
}
export default Navfooter;