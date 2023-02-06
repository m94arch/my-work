import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Displaycatgory from "../componet/display-catgory";
import Footerpage from "../componet/Footer_page";
import Headerpage from "../componet/Header-page";
import Navpages from "../componet/Nav-pages";
import Categoriesdashbrood from "../model/categories-dashbrood";
import { categoriseAction } from "../redux/categorise-slice";

let Categorypage =()=>{

	let dispatch = useDispatch ();
  let CategoryName=useRef();
let CategoryType=useRef();

	let onsubmithandler =(event)=>{
		event.preventDefault();
		if(checkData()){
		  save();
		  clear();
		}
	  };
	let checkData = () => {
		if (CategoryName.current.value != ""&&
		CategoryType.current.value!="") {
		  return true;
		}
		alert("Enter Require data");
		return false;
	  };
	  let save=()=>{
		let catogry =new Categoriesdashbrood(Date.now(), CategoryName.current.value ,CategoryType.current.value );
		  dispatch(categoriseAction.create(catogry));
  
		  clear();
  
  
	  };
  
  
	  let clear =()=>{
		CategoryName.current.value = "";
		CategoryType.current.value = "" ;
		
	  }
return <Fragment>
   
   <Headerpage/>
   <main>
		
		<div className="main-content">
		<Navpages/>
			<div className="content">
				<h3>Catogory</h3>
				<div className="content-data">
					<div className="content-form">
						<form onSubmit={onsubmithandler}>
							<h4>Add Category</h4>
							<div className="form-inline">
								<div className="form-group">
									<label>Category Name</label>
									<input type="text" name="cat_name"  ref={CategoryName} />
								</div>
								<div className="form-group">
									<label>Category Type</label>
									
									<select name="cat_type" ref={CategoryType}>
										<option value="men" >Men</option>
										<option value="women">Women</option>
									</select>
								</div>
							</div>										
							<div className="form-group">
								<label></label>
								<input type="submit" name="addCategory" value="Add Category"  />
							</div>
						</form>



					</div>
					<Displaycatgory/>
				</div>
			</div>
		</div>		

	</main> 

<Footerpage/>
           
</Fragment>
}
export default Categorypage;