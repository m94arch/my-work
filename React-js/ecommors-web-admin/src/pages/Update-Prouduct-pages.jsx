import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footerpage from "../componet/Footer_page";
import Headerpage from "../componet/Header-page";
import Navpages from "../componet/Nav-pages";
import Tableproduct from "../componet/table-product";
import Product from "../model/Product";
import { ProductAction } from "../redux/product_slice";

let UpdateProductpage=()=> {
	let categories = useSelector((state) => state.categories.data);
	
    let task = useSelector((state) => state.product.task);

	let navigater=useNavigate();

	let dispatch=useDispatch(); 
	let pnameRef = useRef();
   let priceRef=useRef();
  let sdescRef = useRef();
  let ldescRef=useRef();
  let CategoryRef = useRef();



  let onsubmithandler =(event)=>{
    event.preventDefault();
      
    if(checkData()){

       save();
       clear();
     }
	 navigater("/Homepage/Productpage")


    };
  let clear =()=>{
    pnameRef.current.value = ""; 
    priceRef.current.value="";
    sdescRef.current.value = "";
    ldescRef.current.value="";
     CategoryRef.current.value = "";

 
    
  }
  let checkData = () => {
    if (
		pnameRef.current.value != "" &&
		priceRef.current.value !=""&&
		sdescRef.current.value!=""&&
		ldescRef.current.value != ""&&
        CategoryRef.current.value != "" 
      
    ) {
      return true;
    }
    alert("Enter Require Data");
    return false;
  };


  let save = () => {
	
		let Category = categories.find(
		  (element)=>element.id==CategoryRef.current.value
		);
 
    let updateProducts = new Product(
     task.id,
     pnameRef.current.value,
     priceRef.current.value,
     sdescRef.current.value,
	 ldescRef.current.value,
	 Category.id,
     Category.name,
   
   
   );
       
	dispatch(ProductAction.update({task:updateProducts}));
	console.log(task.name);



    clear();
  };


  let setproduct=()=>{
	pnameRef.current.value  =task.ProductName;
	priceRef.current.value =task.ProductId;
	sdescRef.current.value=task.descriptionshort;
	ldescRef.current.value=task.descriptionlonge;
	CategoryRef.current.value=task.categoryId;

  };
  useEffect(setproduct, []);
  

    return <Fragment>
        <Headerpage/>
        <main>
		
		<div className="main-content">
	<Navpages/>
			<div className="content">
				<h3>Product</h3>
				<div className="content-data">
					<div className="content-form">
						<form onSubmit={onsubmithandler}>
							<h4>Update Product</h4>
							<div className="form-inline">
								<div className="form-group">
									<label>Product Name</label>
									<input type="text" name="pname" ref={pnameRef}/>
								</div>
								<div className="form-group">
									<label>Price</label>
									<input type="text" name="price" ref={priceRef}/>
								</div>
							</div>
							<div className="form-group">
								<label>Short Description</label>
								<input type="text" name="sdesc" ref={sdescRef}/>
							</div>
							<div className="form-group">
								<label>Long Description</label>
								<input type="text" name="ldesc" rows="3" ref={ldescRef}></input>
							</div>

							<div className="form-inline">
								<div className="form-group">
									<label>Category</label>
									<select name="category" ref={CategoryRef}>
				
										{categories.map((element) => (
                  <option value={element.id}>{element.name}</option>
                ))}
									</select>
								</div>
								<div className="form-group">
									<label>Images</label>
									<input type="file" name="image" multiple/>
								</div>
							</div>												
							<div className="form-group">
								<label></label>
								<input type="submit" name="addProduct" value="Update Product" />
							</div>
						</form>
					</div>
				<Tableproduct/>
				</div>
			</div>
		</div>		

	</main>
    <Footerpage/>
        
    </Fragment>

}
export default UpdateProductpage;