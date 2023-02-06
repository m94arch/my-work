import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ProductAction } from "../redux/product_slice";

let Rowtableproduct=(props)=>{
    let navigater=useNavigate();

    let dispatch=useDispatch()

  let onupdateHandler=()=>{
   
    dispatch(ProductAction.edit(props.product.id));
    navigater("/Homepage/Productpage/UpdateProductpage");
       

  }

  let onDeleteBlogHandler =()=>{
    dispatch(ProductAction.delete(props.product.id));

  }
    return <Fragment>
        <tbody>
								<tr>
									<td>{props.product.ProductName}</td>
									<td>{props.product.ProductId}</td>
									<td>{props.product.categoryName}</td>
									<td><button onClick={onupdateHandler}> Edit</button></td>
									<td><button onClick={onDeleteBlogHandler}> Delete</button></td>
								</tr>
							</tbody>
    </Fragment>

}
export default Rowtableproduct;