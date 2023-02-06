import { Fragment } from "react"

let Headerpage =()=>{
    return <Fragment>
 <header>
		<div className="container">
			<div className="brand">
				<div className="logo">
					<a href="index.html">
						<img src="../img/icons/online_shopping.png" atv="dddfs"/>
						<div className="logo-text">
							<p className="big-logo">Ecommerce</p>
							<p className="small-logo">online shop</p>
						</div>
					</a>
				</div> 
				<div className="shop-icon">
					<div className="dropdown">
						<img src="../img/icons/account.png" atv="ddd"/>
						<div className="dropdown-menu">
							<ul>
								<li><a href="#">My Account</a></li>								
								<li><a href="#">Settings</a></li>
								<li><a href="#">Logout</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div> 
	</header> 
    </Fragment>
}
export default Headerpage;