import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Displaycatgory from "../componet/display-catgory";
import Footerpage from "../componet/Footer_page";
import Headerpage from "../componet/Header-page";
import Navpages from "../componet/Nav-pages";
import Categoriesdashbrood from "../model/categories-dashbrood";
import { categoriseAction } from "../redux/categorise-slice";

let UpdateCategorypage =()=>{
	let navigater=useNavigate();
	let catogry = useSelector((state) => state.categories.catogry);
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
	  let clear =()=>{
		CategoryName.current.value = "";
		CategoryType.current.value = "" ;
		
	  }
	let checkData = () => {
		if (CategoryName.current.value != ""&&
		CategoryType.current.value!="") {
		  return true;
		  
		}
		alert("Enter Require data");
		return false;
	  };
	 

	  let save = () => {
		let updatetask = new Categoriesdashbrood(
			catogry.id,
			CategoryName.current.value,
			CategoryType.current.value,
			
			
  
	   );
		
		dispatch(categoriseAction.update({catogry:updatetask}));

		navigater("/Homepage/Categorypage");

  
	  
	  };


	  
	  let settask=()=>{
        CategoryName.current.value = catogry.name;
		CategoryType.current.value = catogry.typess;
      };
      useEffect(settask, []);
  
  
	
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
							<h4>update Category</h4>
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
								<input type="submit" name="addCategory" value="uppdate Category"  />
							</div>
						</form>



					</div>
					<Displaycatgory />
				</div>
			</div>
		</div>		

	</main> 

<Footerpage/>
           
</Fragment>
}
export default UpdateCategorypage;