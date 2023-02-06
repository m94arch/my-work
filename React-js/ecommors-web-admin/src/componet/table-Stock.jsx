import { Fragment } from "react";
import { useSelector } from "react-redux";
import Rowtablestock from "./row-table-stock";

let Tablestock =()=>{
    let stock = useSelector((state) => state.Stock.data);
return <Fragment>
   <div className="content-detail">
						<h4>All Stock Detail</h4>
						<table>
							<thead>
								<tr>
									<th>Product</th>
									<th>Quantity</th>
									<th>Stock in</th>
									<th>Stock Out</th>
									<th>Available</th>
								</tr>
							</thead>
                            {stock.map((element) =>  (<Rowtablestock key={element.id} stock={element}/>  ))}
						</table>
					</div>
</Fragment>
}
export default Tablestock;