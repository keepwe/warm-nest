import React from "react";
require('../css/cart.css');

class Cart extends React.Component{
	constructor(props){
		super(props)
	}	
	render(){
		return(
			<div>
				<div className="steps">
					<ul>
						<li className="active">我的购物车<span></span></li>
						<li>确定订单信息<span></span></li>
						<li>选择支付方式<span></span></li>
						<li>完成<span></span></li>
					</ul>
		   	</div>
				 <div className="container">
					<div className="checout_tips">
								温馨提示：购物车中的商品无法保留库存，请您及时结算，商品库存以订单结算时为准！
								<span></span>
					</div>
				 
					<div id="show">
							<div className="checkout_wrapper">
									<div className="shoping_th">
										<ul>
											<li className="checkbox">
												<label><input id="selectAll" className="Cinput" type="checkbox" />全选</label>
											</li>
											<li className="product_name">商品信息</li>
											<li className="product_price">单价</li>
											<li className="product_num">数量</li>
											<li className="product_operate">操作</li>
										</ul>
									</div>
									<div id="items">



										<div className="shoping_td  clearfix">
											 <ul >
												<li className="checkbox clearfix">
												<div className="item_pic">
												 <input type="checkbox"  className="Cinput" name="checkItem" />
												   <a target="_blank" for="selector_113623_01_Photo" href="">
													 <img name="picture" width="150" height="150" title="Farmhouse 餐桌" src="http://www.harborhousehome.com/UploadFile/Sku/2/220_220/113623.jpg"/>
												   </a>
												  </div>
											  </li>
                        <li className="product_name2">
									         <a href="#">Farmhouse 餐桌</a>
														<p>国产榆木/国产榆木单板/环保人造板 - 水洗棕色规格: 直径132X高76CM</p>
												</li>
												<li className="product_price product_price2">
											  	<div className="item_price"><p >￥7980.00</p></div>
												</li>
												<li className="product_num product_num2">
													  <div><span>-</span><p>8</p><span>+</span></div>
												</li>
												<li className="product_chaozuo">
													  <a href="#">[ 删除 ]</a>
												</li>
												
											</ul> 
										</div>


										<div className="shoping_td  clearfix">
										<ul >
										 <li className="checkbox clearfix">
										 <div className="item_pic">
											<input type="checkbox"  className="Cinput" name="checkItem" />
												<a target="_blank" for="selector_113623_01_Photo" href="">
												<img name="picture" width="150" height="150" title="Farmhouse 餐桌" src="http://www.harborhousehome.com/UploadFile/Sku/2/220_220/113623.jpg"/>
												</a>
											 </div>
										 </li>
										 <li className="product_name2">
												<a href="#">Farmhouse 餐桌</a>
												 <p>国产榆木/国产榆木单板/环保人造板 - 水洗棕色规格: 直径132X高76CM</p>
										 </li>
										 <li className="product_price product_price2">
											 <div className="item_price"><p >￥7980.00</p></div>
										 </li>
										 <li className="product_num product_num2">
												 <div><span>-</span><p>8</p><span>+</span></div>
										 </li>
										 <li className="product_chaozuo">
												 <a href="#">[ 删除 ]</a>
										 </li>
										 
									 </ul> 
								 </div>

									</div>
							</div>
							
							

							<div class="summary_container">
									 <div class="summary fr">
									 <dl>
											<dt>
												<span class="product_num">商品数量总计: <strong id="productcount">1</strong> 件</span>商品金额（不含运费）:
											</dt>
									    <dd id="totalPrice">￥7980.00</dd>
									 </dl>
									 <dl id="disdl" class="hide">
										<dt><span class="vip"></span>会员折扣金额 :</dt>
										<dd id="discount">-￥0.00</dd>
									</dl>
                  <dl class="PT30">
										<dt>合计 :</dt>
										<dd class="price" id="totalamount">￥7980.00</dd>
									</dl>
									<dl class="pT10">
										<dt>&nbsp;</dt>
										<dd>
											<a class="btn btn_white btn_130" href="../index.html">继续购物</a>
											<button id="btnCheckOut" class="btn btn_gray btn_130 MR0" type="button">下一步</button>
										</dd>
							  	</dl>
									<dl>
								      	<dd  style={{
													color:'#a51e2e',
													fontSize:'14px',
												}}>
												</dd>
								  </dl>


	                </div>
							</div>
					</div>


				 
				 
				 
				 </div>
  
  
			</div>
		)
	}
	
	
}
export default Cart;