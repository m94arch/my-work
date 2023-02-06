import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footerpage from "../componet/Footer_page";
import Headerpage from "../componet/Header-page";
import Navpages from "../componet/Nav-pages";
import Tablestock from "../componet/table-Stock";
import Product from "../model/Product";
import Stockdashbrood from "../model/Stock-dashbrood";
import { StockAction } from "../redux/Stock-slice";

let Stockpage =(props)=>{
	let product = useSelector((state) => state.product.data);
	let dispatch = useDispatch ();


	let productref =useRef();
	let QuantityRef=useRef();


	let onsubmithandler =(event)=>{
		event.preventDefault();
		if(checkData()){
		  save();
		  clear();
		}
	  };

	let checkData = () => {
		if (productref.current.value != ""&&
		QuantityRef.current.value!="") {
		  return true;
		}
		alert("Enter Require data");
		return false;
	  };


	  let save=()=>{
		let products = product.find((element)=>element.id==productref.current.value);
   
		let stock =new Stockdashbrood(
			Date.now(),
			products.ProductName,
			QuantityRef.current.value, 
			products.id,
			productref.current.value,
		
		
			);

		  dispatch(StockAction.create(stock));
		  clear();
  
  
	  };


	  let clear =()=>{
		productref.current.value = "";
		QuantityRef.current.value = "" ;
		
	  }

return <Fragment>
    <Headerpage/>
    <main>
		
		<div className="main-content">
		<Navpages/>
			<div className="content">
				<h3>Stock</h3>
				<div className="content-data">
					<div className="content-form">
						<form onSubmit={onsubmithandler}>
							<h4>Add Stock</h4>
							<div className="form-inline">
								<div className="form-group">
									<label>Product Name</label>
									<select name="pname" ref={productref}>
									{product.map((element) => (
									     <option value={element.id}>{element.ProductName}</option>
										 ))}
										
									</select>
								</div>
								<div className="form-group">
									<label>Quantity</label>
									<input type="text" name="pqty" ref={QuantityRef}/>
								</div>
							</div>										
							<div className="form-group">
								<label></label>
								<input type="submit" name="addStock" value="Add Stock"/>
							</div>
						</form>
					</div>
				<Tablestock/>	

				</div>
			</div>
		</div>		

	</main> 
    <Footerpage/>

</Fragment>
}
export default Stockpage;