import { Fragment } from "react";
import Footerpage from "../componet/Footer_page";
import Headerpage from "../componet/Header-page";
import Navpages from "../componet/Nav-pages";
import "../resourses/css/style.css";


let Homepage =()=>{
return <Fragment>
   
<Headerpage/>
	<main>
		
		<div className="main-content">
		<Navpages/>
        
			<div className="content dashboard">
				<h3>Dashboard</h3>
				<div className="content-data">
					<div className="content-detail">
						<h4>Low Stock Report</h4>
						<table>
							<thead>
								<tr>
									<th>Product</th>
									<th>Price</th>
									<th>Category</th>
									<th>Qty</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Blue Jeans</td>
									<td>1500</td>
									<td>Pants</td>
									<td>2</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="content-detail">
						<h4>Recent Order</h4>
						<table>
							<thead>
								<tr>
									<th>Date</th>
									<th>Order Ref#</th>
									<th>User</th>
									<th>Amount</th>
									<th>View</th>									
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>11-05-2020</td>
									<td>15895452</td>
									<td>Kamran</td>
									<td>1500</td>
									<td>View</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="content-detail">
						<h4>Completed Order</h4>
						<table>
							<thead>
								<tr>
									<th>Date</th>
									<th>Order Ref#</th>
									<th>User</th>
									<th>Amount</th>
									<th>View</th>									
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>11-05-2020</td>
									<td>15895452</td>
									<td>Kamran</td>
									<td>1500</td>
									<td>View</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>		

	</main> 

	<Footerpage/>

</Fragment>
}
export default Homepage;