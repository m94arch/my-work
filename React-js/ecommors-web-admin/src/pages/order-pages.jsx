import { Fragment } from "react";
import Footerpage from "../componet/Footer_page";
import Headerpage from "../componet/Header-page";
import Navpages from "../componet/Nav-pages";

let Orderpages =()=>{
return <Fragment>
    <Headerpage/>
    <main>
		
		<div className="main-content">
	<Navpages/>
			<div className="content">
				<h3>Order</h3>
				<div className="content-detail">
					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Order Ref#</th>
								<th>User</th>
								<th>Amount</th>
								<th>Payment Mode</th>
								<th>Status</th>
								<th>View</th>
								<th>Delete</th>									
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>11-05-2020</td>
								<td>15895452</td>
								<td>Kamran</td>
								<td>1500</td>
								<td>Cash On Delivery</td>
								<td>Pending</td>
								<td>View</td>
								<td>Delete</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>		

	</main>
<Footerpage/>

</Fragment>
}
export default Orderpages;