import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navpanal from "../Componet/panal-pages/Nav-panal";
import Categoriesblog from "../models/categories-blog";
import { categoriseAction } from "../redux/categorise-slice";
import "../Resource/css/add-category-style.css"

let Addcategory =()=>{
  let Navigator=useNavigate ();
  let dispatch = useDispatch ();
  let CategoryName=useRef();

  let OncancelHandler=()=>{
    Navigator ("/Panal/Catogry")
    
  }
  let onsubmithandler =(event)=>{
      event.preventDefault();
      if(checkData()){

        save();
        clear();
        Navigator("/Panal/Catogry");
      }
    };
    let checkData = () => {
      if (CategoryName.current.value != "") {
        return true;
      }
      alert("Enter Require data");
      return false;
    };
    let save=()=>{
      let Category =new Categoriesblog(Date.now(), CategoryName.current.value);
        dispatch(categoriseAction.create(Category));

        clear();


    };


    let clear =()=>{
      CategoryName.current.value = ""; 
      
    }
 
return <section className="main-section">
        <section className="sidebar">  
        <Navpanal/>
</section>
   <form className="mainn"  onSubmit={onsubmithandler}>
      <div>
        <span>Add new category</span>
      </div>
      <div>
        <label>Category name</label>
        <div>
          <input
            className="input"
            type="text"
            placeholder="Ex: Development"
            ref={CategoryName}
    
          />
        </div>
      </div>
      <div className="btn4">
        <button onClick={OncancelHandler}>Cancel</button>
        <button type="submit">Done</button>
      </div>
    </form>
    </section>

}
export default Addcategory;