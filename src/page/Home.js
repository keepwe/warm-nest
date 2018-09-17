import React from "react"
import "../css/home.css"
import "../js/animateBak.js"
import "../js/index.js"
import "../js/head.js"
import Broadcast from  "../js/Lunbo.js"
import s1 from '../img/index1(1).jpg'
import s2 from '../img/index2.jpg'
import s3 from '../img/index02.jpg'
import s4 from '../img/index03.jpg'
import s5 from '../img/slick-2.jpg'
import s6 from '../img/slick-3.jpg'
import s7 from '../img/slick-4.jpg'
import s8 from '../img/slick-1.jpg'
import s9 from '../img/index04.jpg'
import s10 from '../img/index11.jpg'
import s11 from '../img/banner.jpg'
import s12 from '../img/banner01.jpg'
import Navheader from "../components/Header/Navheader"

var sty1={
	background:`url(${s11}) center center no-repeat`,
	Zindex:0, 
	opacity:1
}
var sty2={
	background:`url(${s12}) center center no-repeat`,
	Zindex: 0, 
	opacity:0
}
var sty3={
	position: "absolute",
	bottom: 0,
	left: 50+"%",
	marginLeft: -72+"px"
}
class Home extends React.Component{
	render(){
		return(
			<div>
				<Navheader />
				{/*<!--banner-->*/}
				<div className="homebanner">
				  <ul className="homebannerlist">
				    <li style={sty1}></li>
				    <li style={sty2}></li>
				  </ul>
				  <ul className="homebannernav">
				    <li className="">1</li>
				    <li className="">2</li>
				  </ul>
				  <div className="homebanner_directionnav">
				    <div id="leftBtn" className="newbanner_prev hide">&nbsp;</div>
				    <div id="rightBtn" className="newbanner_next hide">&nbsp;</div>
				  </div>
				</div>
				{/**<!--main-->**/}
				<div className="main1">
				  <img src={s1} />
				</div>
				<div className="main1">
				  <img src={s2} alt="" />
				</div>
				<div className="main1">
				  <img src={s3}  alt="" />
				</div>
				<div className="main_title">
				  <img src={s4} alt="" />
				</div>
				<div className="autumn_box mt27  ov-h sliderBox">
				  <div className="autumn_sm_box">
				    <div className="autumn_bg_box" style={{left: -555+"px"}}>
				      <a className="fl" href=""><img src={s5} alt="收纳" />
				        <p>收纳容器&nbsp;&gt;</p>
				      </a><a className="fl" href="">
				      <img src={s6} alt="蜡烛,烛台" />
				      <p>蜡烛烛台&nbsp;&gt;</p>
				    </a><a className="fl" href="">
				      <img src={s7} alt="装饰摆件" />
				      <p>装饰摆件&nbsp;&gt;</p></a><a className="fl" href="http://www.harborhousehome.com/product-list-single-555/"
				                                  target="_blank"><img
				      src={s8} alt="花,花瓶" />
				      <p>花与花瓶&nbsp;&gt;</p></a><a className="fl" href="">
				      <img src={s5} alt="收纳" />
				      <p>收纳容器&nbsp;&gt;</p></a><a className="fl" href="">
				      <img src={s6} alt="蜡烛,烛台" />
				      <p>蜡烛烛台&nbsp;&gt;</p></a><a className="fl" href="">
				      <img src={s7} alt="装饰摆件" />
				      <p>装饰摆件&nbsp;&gt;</p></a><a className="fl" href="">
				      <img src={s8} alt="花,花瓶" />
				      <p>花与花瓶&nbsp;&gt;</p></a></div>
				    <div className="autumn_btn_left">&nbsp;</div>
				    <div className="autumn_btn_right">&nbsp;</div>
				    <div className="table" style={sty3}>
				      <div className="table-block small_active">&nbsp;</div>
				      <div className="table-block">&nbsp;</div>
				      <div className="table-block">&nbsp;</div>
				      <div className="table-block">&nbsp;</div>
				    </div>
				  </div>
				</div>
				<div className="main1">
				  <img src={s9} alt="" />
				</div>
				<div className="main1">
				  <img src={s10} alt="" />
				</div>
			</div>
		)
	}
	componentDidMount(){
		Broadcast()
	}

}
export default Home