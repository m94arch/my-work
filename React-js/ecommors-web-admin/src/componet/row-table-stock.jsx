import { Fragment } from "react";
import { useSelector } from "react-redux";

let Rowtablestock=(props)=>{
    

return <Fragment>
    	<tbody>
			<tr>
			    <td>{props.stock.Name}</td>
				<td>{props.stock.Quantity}</td>
				<td>-</td>
				<td>-</td>
				<td>-</td>
			</tr>
	</tbody>
</Fragment>
}
export default Rowtablestock;