
import React from "react";
import "../css/fenye.css"
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import s1 from '../img/jiantou.jpg'
import s2 from '../img/fenye1.jpg'
import s3 from '../img/fenye2.jpg'
import s4 from '../img/fenye3.jpg'
import s5 from '../img/fenye4.jpg'
import s6 from '../img/fenye5.jpg'
import s7 from '../img/fenye6.jpg'
import s8 from '../img/fenye7.jpg'
import s9 from '../img/fenye8.jpg'
import s10 from '../img/fenye9.jpg'
import s11 from '../img/fenye10.jpg'
import s12 from '../img/fenye11.jpg'

var sty1={
	display:'none'
}

var sty2={
	background: `url(${s1}) -20px -40px`
}

var sty3={
	marginBottom:20+'px'
}

var sty4={
	background: `url(${s3}) 0 0 no-repeat`,
    width: 900+'px',
    height: 617+'px',
   	marginBottom:20+'px'
}

var sty5={
	width:900+'px',
	height:544+'px',
	display:'flex',
	flexDirection: 'row',
    justifyContent: 'space-between'
	
}

var sty6={
	width:900+'px',
	height:535+'px',
	background: `url(${s6}) 0 0 no-repeat`,
   	marginBottom:20+'px'
	
}

var sty7={
	width:900+'px',
	height:535+'px',
	background: `url(${s7}) 0 0 no-repeat`,
   	marginBottom:20+'px'
}

var sty8={
	width:900+'px',
	height:561+'px',
	display:'flex',
	flexDirection: 'row',
    justifyContent: 'space-between'
   
	
}

var sty9={
	width:900+'px',
	height:388+'px',
	background: `url(${s11}) 0 0 no-repeat`,
}

var sty10={
	width:900+'px',
	height:536+'px',
	background: `url(${s12}) 0 0 no-repeat`,
}


import Navheader from "../components/Header/Navheader"

class Fenye extends React.Component{
	
	render(){
		return(
			<div>
				<div className="container">
					<div className="breadCrumbs">
       					<a href="#">首页&nbsp;&nbsp;</a>&gt;
       					<a href="#">&nbsp;&nbsp;家具</a>
    				</div>
    				<div className="PListWrapper">
    					<div className="productSideW fl">
    						<div className="productSide" id="side">
    							<h3>品 类 Category</h3>
    							<h4><Link to={{pathname:'/liebiao'}}><a href="#">家具频道</a></Link></h4>
    							<dl>
				                    <dt><span></span><Link to={{pathname:'/liebiao'}}><a href="#">餐厅家具</a></Link></dt>
				
				                    <dd style={sty1}>
				                        <ul className="subnav">
				                                <li><Link to={{pathname:'/liebiao'}}><a href="#">餐椅 </a></Link></li>
				                                <li><Link to={{pathname:'/liebiao'}}><a href="#">餐桌</a></Link></li>
				                                <li><Link to={{pathname:'/liebiao'}}><a href="#">餐边柜/酒柜</a></Link></li>
				                                <li><Link to={{pathname:'/liebiao'}}><a href="#">吧台/吧椅 </a></Link></li>
				                        </ul>
				                    </dd>
				
				                </dl>
								<dl>
				                    <dt><span></span><a href="">客厅家具 </a></dt>
				
				                    <dd style={sty1}>
				                        <ul className=" subnav">
				                                <li><a href="" class="">沙发 </a></li>
				                                <li><a href="" class="">咖啡桌 </a></li>
				                                <li><a href="" class="">电视柜/塔柜 </a></li>
				                                <li><a href="" class="">边几 </a></li>
				                                <li><a href="" class="">边桌 </a></li>
				                                <li><a href="" class="">休闲桌 </a></li>
				                                <li><a href="" class="">休闲椅/休闲凳/备用套 </a></li>
				                                <li><a href="" class="">软包休闲椅 </a></li>
				                        </ul>
				                    </dd>
				
				                </dl>
				                <dl>
				                    <dt><span></span><a href="">门厅/玄关 </a></dt>
				
				                    <dd style={sty1}>
				                        <ul className=" subnav">
				                                <li><a href="" class="">玄关柜 </a></li>
				                                <li><a href="" class="">边桌 </a></li>
				                                <li><a href="" class="">玄关凳 </a></li>
				                                <li><a href="" class="">床尾凳 </a></li>
				                        </ul>
				                    </dd>
				
				                </dl>
				                <dl>
				                    <dt><span></span><a href="">沙发 </a></dt>
				
				                    <dd style={sty1}>
				                        <ul className=" subnav">
				                                <li><a href="" class="">所有沙发 </a></li>
				                                <li><a href="" class="">三人沙发 </a></li>
				                                <li><a href="" class="">双人沙发 </a></li>
				                                <li><a href="" class="">单人沙发 </a></li>
				                                <li><a href="" class="">脚台 </a></li>
				                                <li><a href="" class="">沙发床 </a></li>
				                                <li><a href="" class="">组合沙发 </a></li>
				                                <li><a href="" class="">皮沙发 </a></li>
				                        </ul>
				                    </dd>
				
				                </dl>
				                <dl>
				                    <dt><span></span><a href="">卧室家具 </a></dt>
				
				                    <dd style={sty1}>
				                        <ul className=" subnav">
				                                <li><a href="" class="">床 </a></li>
				                                <li><a href="" class="">床垫/床顶垫 </a></li>
				                                <li><a href="" class="">床盒 </a></li>
				                                <li><a href="" class="">床头柜 </a></li>
				                                <li><a href="" class="">斗柜 </a></li>
				                                <li><a href="" class="">梳妆台/梳妆镜/梳妆凳 </a></li>
				                                <li><a href="" class="">床尾凳 </a></li>
				                                <li><a href="" class="">衣柜 </a></li>
				                                <li><a href="" class="">休闲桌 </a></li>
				                        </ul>
				                    </dd>
				
				                </dl>
				                <dl>
				                    <dt><span></span><a href="">书房家具 </a></dt>
				
				                    <dd style={sty1}>
				                        <ul className=" subnav">
				                                <li><a href="" class="">书桌 </a></li>
				                                <li><a href="" class="">书柜/文件柜 </a></li>
				                                <li><a href="" class="">办公椅 </a></li>
				                        </ul>
				                    </dd>
				
				                </dl>
				                <dl>
				                    <dt><span></span><a href="">卫浴家具 </a></dt>
				
				                    <dd style={sty1}>
				                        <ul className=" subnav">
				                                <li><a href="" class="">卫浴柜 </a></li>
				                                <li><a href="" class="">浴室镜 </a></li>
				                        </ul>
				                    </dd>
				
				                </dl>
				                <dl>
				                    <dt><span></span><a href="">休闲家具 </a></dt>
				
				                    <dd style={sty1}>
				                        <ul className=" subnav">
				                                <li><a href="" class="">储物箱 </a></li>
				                                <li><a href="" class="">休闲椅/休闲凳/备用套 </a></li>
				                                <li><a href="" class="">休闲桌 </a></li>
				                                <li><a href="" class="">装饰架/壁架 </a></li>
				                        </ul>
				                    </dd>
				
				                </dl>
				                <dl>
				                    <dt><span></span><a href="">户外家具 </a></dt>
				
				                    <dd style={sty1}>
				                        <ul className=" subnav">
				                                <li><a href="" class="">户外餐桌/餐椅 </a></li>
				                                <li><a href="" class="">户外座椅/躺椅 </a></li>
				                                <li><a href="" class="">遮阳伞/底座/防护罩 </a></li>
				                        </ul>
				                    </dd>
				
				                </dl>
				                <h3>风格 Style</h3>
				                <ul className="subnav">
				                        <li><a class="" href="">海洋风 </a></li>
				                        <li><a class="" href="">休闲风 </a></li>
				                        <li><a class="" href="">自然风 </a></li>
				                        <li><a class="" href="">经典风 </a></li>
				                </ul>
				                <h3>特色 Features</h3>
				                <ul className="subnav">
				                        <li><a class="" href="">新品 </a></li>
				                        <li><a class="" href="">促销 </a></li>
				                </ul>
				                <h3 data-type="sub312" style={sty1}>窗帘定制服务 Service</h3>
    							<ul className="subnav" data-type="sub312" style={sty1}>
						            <li><a href="">1 选择窗帘款式 </a></li>
						            <li><a href="">2 选择面料及配件 </a></li>
						            <li><a href="">3 尺寸测量说明 </a></li>
						            <li><a href="">4 价格计算说明 </a></li>
						        </ul>
    						</div>
    						<div className="advert">
    							<a href="" target=""><img src="" /></a>
    							<img title="" src={s2} />
    						</div>
    					</div>
	 					<div className="article_content fr" style={sty3}>
	 						<div style={sty4}></div>
	 						<div style={sty5}>
	 							<a href=""><img src={s4} /></a>
	 							<a href=""><img src={s5} /></a>
	 						</div>
	 						<div style={sty6}>
	 						</div>
	 						<div style={sty7}>
	 						</div>
	 						<div style={sty8}>
	 							<a href=""><img src={s9} /></a>
	 							<a href=""><img src={s10} /></a>
	 						</div>
	 						<div style={sty9}>
	 						</div>
	 						<div style={sty10}>
	 						</div>
	 						
	 						
	 					</div>
	    
	    			</div>
				</div>
=======
				<Navheader />
				<h1>分页</h1>
>>>>>>> 46c2fd7f2644287ef812bb2cffcce9e22ae235a8
			</div>
		)
	}
}

export default Fenye