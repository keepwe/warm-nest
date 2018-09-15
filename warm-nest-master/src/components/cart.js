import $ from "jquery"
import React from "react";
require('../css/cart.css');


class Cart extends React.Component{
	constructor(props){
		super(props),
		
		this.state={
			list:[],
			checked:true,
			allChecked:false,			
		}
		this.danxuan = this.danxuan.bind(this)
		this.add = this.add.bind(this)
	}
	
	quanxuan(item){
		
		if(this.state.allChecked==false) {
			for(var i = 0; i < this.state.list.length; i++) {
				var item = this.state.list[i];
				var checked=item.checked;
				item.checked = true;
				console.log(item)
				this.setState({checked:true})
				console.log(this.state.allChecked)
				
			}
		} else {  //取消全选
			 for(var i = 0; i < this.state.list.length; i++) {
			 	var item = this.state.list[i];
			     item.checked = false;
				 this.setState({checked:false})
				 console.log(this.state.allChecked)
			 }
		}
		this.state.allChecked = !this.state.allChecked;
	}
	
	 danxuan(item){
	// 	// var selected = this.state.list[i].checked;
	 	console.log("0000")
		// if(selected==true){
		// 	this.state.allChecked==false
		// 	selected==false
		// }else{
		// 	this.state.allChecked==true
		// 	selected==true
		// }
	//}
	// handleClick(item,event) {
	// 	console.log("11111")
	  }
	
//购物车加
      add(){
		  console.log("555")
	  }



//购物车减


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
												<label><input id="selectAll" className="Cinput" type="checkbox" onClick={this.quanxuan.bind(this)} defaultChecked={this.state.allChecked}/>全选</label>
											</li>
											<li className="product_name">商品信息</li>
											<li className="product_price">单价</li>
											<li className="product_num">数量</li>
											<li className="product_operate">操作</li>
										</ul>
									</div>


									<div id="items">



									{
										this.state.list.map(function(item,i){
											var _this = this;
											return(
												<div className="shoping_td  clearfix" key={i}>
											 <ul >
												<li className="checkbox clearfix" >
												    <div className="item_pic">
													<input type="checkbox"  className="Cinput" name="checkItem" checked={item.checked} onClick={()=>{this.danxuan(i)}}/>
														<a target="_blank" for="selector_113623_01_Photo" href="">
														<img name="picture" width="150" height="150" title="Farmhouse 餐桌" src={item.pimg}/>
														</a>
													</div>
												</li>
												<li className="product_name2">
														<a href="#">{item.pname}</a>
														<p>{item.pdesc}</p>
												</li>
												<li className="product_price product_price2">
													<div className="item_price"><p >{item.pprice}</p></div>
												</li>
												<li className="product_num product_num2">
														<div><span>-</span><p>8</p><span onClick={()=>{this.add(i)}}>+</span></div>
												</li>
												<li className="product_chaozuo">
														<a href="#">[ 删除 ]</a>
												</li>
												
											</ul> 

									    </div>
											)
										})
									}


										
									  








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
	

	componentWillMount(){
		var _this=this;
		$.ajax({
			type:"get",
			url:"http://jx.xuzhixiang.top/ap/api/cart-list.php",
			data:{id:111},
			dataType:'json',
			async:true,
			success:function(data){
				console.log(data.data)
				_this.setState({list:data.data})
			}
		});
	}
	
}
export default Cart;