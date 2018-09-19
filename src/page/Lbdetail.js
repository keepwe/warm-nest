import React from "react"
import "../css/lbdetail.css"

import l1 from '../img/113621.jpg'
import l2 from '../img/113622.jpg'
import l3 from '../img/113623.jpg'
import l4 from '../img/113624.jpg'
import l5 from '../img/113625.jpg'
import top from '../img/liebiao-top.jpg'
import vip from '../img/lb-vip.jpg'


class Lbdetail extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className='detbox'>
				<div className='headbox'>
					首页&gt;装饰&gt;摆件&gt;详情
				</div>
				
				<img src={l1} className='bigimg' />
				
				
				
				
				<div className='detright'>
					<div className='detboxt'>
						<h3>Virtue 巨头鲸摆件</h3>
						<p>编号:10086 &nbsp; &nbsp;&nbsp;销量:0</p>
						<span>￥408</span><strong>￥345</strong>
						<div className='detimg'>
							<img src={l1} />
							<img src={l2} />
						</div>
					</div>
					
					
					
					<div className='detboxc'>
						<span>材质</span><strong>真皮/MDF/玻璃</strong>
						<span>颜色</span><img src={l1} />
						<span>规格</span><p >长36x宽14x高18CM</p>
						<p >长38x宽18x高20CM</p>
						<p >长42x宽20x高22CM</p>
						<span>数量</span><input type='number' value='1'/>
					</div>
					
					
					<button>支付购买</button>
					
				</div>
				
				
				
				
				
			</div>
		)
	}
	
	componentWillMount(){
	}
	
	
}

export default Lbdetail