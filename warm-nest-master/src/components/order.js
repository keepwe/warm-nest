import zaneDate from 'zane-calendar'
import distpicker from "distpicker"    //三级联动
import React from "react";
require('../css/order.css');


class Order extends React.Component{
	constructor(props){
		super(props)
		
	}	
	
	render(){
		return(
			<div>
				<div className="steps">
					<ul>
						<li >我的购物车<span></span></li>
						<li className="active">确定订单信息<span></span></li>
						<li>选择支付方式<span></span></li>
						<li>完成<span></span></li>
					</ul>
				</div>
				<h4>收货信息</h4>
				<div className="tit">
					<div className="address">
						<h4>新增收货地址<span>  ( 电话号码、手机号选填一项，其余为必选项 )</span></h4>
						<div className="aaa">*收货人 <input type="text" className="ipthuo"></input> <span className="shou"> 请填写收货人</span></div>
						<div className="aaa"><div data-toggle="distpicker">
						     *地区  <select className="select1"></select> 
									<select className="select1"></select>
									<select className="select1"></select>
									<span className="shou">  请填写收货地址</span>
								</div>
								
						</div>	
						
						<div className="aaa">*地址 <input type="text" className="iptaddress"></input> <span className="shou"> 请填写收货地址</span></div>
						<div className="aaa">*邮编 <input type="text" className="iptemail"></input > <span className="shou"> 请填写邮政编码</span></div>
						<div className="aaa">*手机 <input type="text" className="iptemail"></input>    或固话    <input type="text" className="iptphone"></input>  -  <input type="text" className="iptphone2"></input>  -  <input type="text" className="iptphone"></input> <span className="shou"> 请填写手机或固话</span></div>
						<div className="aaa">设为默认 <input type="checkbox"></input></div>
						<div className="aaa"><button className="btn1">保存并使用该地址</button><button className="btn2">取消</button></div>
						


					</div>
				     
				</div>



				<h4>配送信息</h4>
				<div className="tit">
					  <div className="peisong">
						   <div className="aaa bbb">
						   配送方式  &nbsp; &nbsp; &nbsp;<input type="radio" name="select"></input>  快递发货<input type="radio" name="select"></input>  物流送货  <input type="radio" name="select"></input>  仓库自提    &nbsp; &nbsp; &nbsp;( 如有特别配送要求，请致电Harbor House客服4008881916）
						 
						 
						   </div>
					 
						   <div className="aaa day">
							 送货日期   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<input type="day" name="" id="zane-calendar"/> <a href="">［查看物流规则］</a>
							 
						   </div>
						   
						   <div className="aaa">
						      运费共计   <span className="money"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;￥0.00元</span>   
						   </div>
					 
					 
					  </div>
				   
				</div>


				<h4>发票信息</h4>
				<div className="tit">
				   <div className="fapiao">
				       发票类型  &nbsp; &nbsp; &nbsp;<input type="radio" name="select"></input>  不开发票 <input type="radio" name="select"></input>  普通发票   <input type="radio" name="select"></input>  增值税发票     &nbsp; &nbsp; &nbsp;( 如有特别配送要求，请致电Harbor House客服4008881916）
				   </div>
				</div>


				<h4>客户留言</h4>
				<div className="tit">
					<div className="liuyan">
						<textarea rows="5" cols="80" placeholder="如有特别说明，请留意。">
							
						</textarea>
                        <p>不超过50个字</p>
					</div>
				   
				</div>


				<h4>商品清单</h4>
				<div className="tit">
				   <div className="goods">
				   
				 
				 
				   </div>
				   
				</div>




			</div>
		)
	}
	
	
}
export default Order;