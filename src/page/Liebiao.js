import React from "react"
import "../css/listItem.css"

import l1 from '../img/113621.jpg'
import l2 from '../img/113622.jpg'
import l3 from '../img/113623.jpg'
import l4 from '../img/113624.jpg'
import l5 from '../img/113625.jpg'
import top from '../img/liebiao-top.jpg'
import vip from '../img/lb-vip.jpg'


class Liebiao extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div class='lbbigbox'>
				<div className='headbox'>
					首页&gt;装饰&gt;摆件&gt;详情
				</div>
				<div class='lbmemu'>
					<div class='lbmemut'>
						
					
					</div>
				
					<div class='lbvip'>
						<h3>Welcome to join</h3>
						<p>members of us</p>
						<p>website</p>
						<span>欢迎成为我们尊贵的会员</span>
						<img src={vip} />
						<strong>享受五项专属权益&gt;</strong>
					</div>
					
				</div>
				
				<div id='lbbox'>
					<div class='lbtop'>
						<img src={top} />
					
					</div>
					
					<div class='lbsearch'>
						<select name="">
							<option value="">价格</option>
							<option value="">销量</option>
							<option value="">新品</option>
							<option value="">热度</option>
						</select>
						<span>销量</span>
						<span>价格↑</span>
						<span>新品</span>
					
					
					</div>
					
					
					<div class='lblist'>
					
						
						
						<div class="product">
					      <div class="img">
					        <a href="/lbdetail">
					          <img src={l3} alt="" />
					        </a>
					        <img class='lbsimg' src={l3} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥408</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥163</strong>
					    </div>
					    
					    
					    
					    
					    
					    <div class="product">
					      <div class="img">
					        <a href="/lbdetail">
					          <img src={l4} alt="" />
					        </a>
					      <img class='lbsimg' src={l4} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥809-￥1232</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥509-￥932</strong>
					    </div>
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l1} alt="" />
					        </a>
					      <img class='lbsimg' src={l1} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥809-￥1232</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥509-￥932</strong>
					    </div>
					    
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l3} alt="" />
					        </a>
					      <img class='lbsimg' src={l3} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥408</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥163</strong>
					    </div>
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l2} alt="" />
					        </a>
					      <img class='lbsimg' src={l2} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥809-￥1232</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥509-￥932</strong>
					    </div>
					    
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l5} alt="" />
					        </a>
					      <img class='lbsimg' src={l5} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥408</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥163</strong>
					    </div>
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l1} alt="" />
					        </a>
					      <img class='lbsimg' src={l1} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥809-￥1232</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥509-￥932</strong>
					    </div>
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l4} alt="" />
					        </a>
					      <img class='lbsimg' src={l4} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥408</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥163</strong>
					    </div>
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l1} alt="" />
					        </a>
					      <img class='lbsimg' src={l1} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥409-￥532</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥109-￥332</strong>
					    </div>
					    
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l3} alt="" />
					        </a>
					      <img class='lbsimg' src={l3} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥408</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥163</strong>
					    </div>
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l5} alt="" />
					        </a>
					      <img class='lbsimg' src={l5} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥409-￥532</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥109-￥332</strong>
					    </div>
					    
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l4} alt="" />
					        </a>
					      <img class='lbsimg' src={l4} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥408</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥163</strong>
					    </div>
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l2} alt="" />
					        </a>
					      <img class='lbsimg' src={l2} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥408</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥163</strong>
					    </div>
					    
					    
					    
					    
					    <div class="product">
					      <div class="img">
					         <a href="/lbdetail">
					          <img src={l1} alt="" />
					        </a>
					      <img class='lbsimg' src={l1} />
					      </div>
					      <h4>
					      <a href="#">
					        Farmhouse 餐桌
					      </a>
					      
					      </h4>
					      <p class="price ">
					        <span>￥409-￥532</span>	<em>New Sale</em>
					        
					      </p>
					      <strong>￥109-￥332</strong>
					    </div>
					
					
					</div>
					
					
				</div>	
				
			</div>
		)
	}
}

export default Liebiao