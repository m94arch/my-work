import { Fragment } from "react";
import { useSelector } from "react-redux";
import Rowtableproduct from "./row-table-product";

let Tableproduct=()=>{
    let product = useSelector((state) => state.product.data);

return <Fragment>
    	<div className="content-detail">
						<h4>All Products</h4>
						<table>
							<thead>
								<tr>
									<th>Product</th>
									<th>Price</th>
									<th>Category</th>
									<th>Edit</th>
									<th>Delete</th>
								</tr>
							</thead>
                            {product.map((element) =>  (<Rowtableproduct key={element.id} product={element}/>  ))}
						</table>
					</div>
</Fragment>
}
export default Tableproduct;