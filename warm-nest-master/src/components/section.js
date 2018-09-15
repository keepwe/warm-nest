

import React from "react";
import {BrowserRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import Cart from "./cart";
import Order from "./order"


class Section extends React.Component{
	constructor(props){
		super(props)
	}	
	render(){
		return(
			<div>
                <Router>   
											
                    <div>   {/* 有一个根节点 */}

                        <Link to="/cart"><span className="shopping_icon"></span>购物车</Link>
                        
                        <Switch>
                            <Route path="/cart" component={Cart}></Route>
                        </Switch>
                            
                    </div>
                </Router>
			</div>
		)
	}
	
	
}
export default Section;