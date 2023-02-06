import { useEffect, useState } from "react";
import { useRef } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import category from "../../model/category";
import { categoriseAction } from "../../redux/categorise-slice";

let UpdateCategoryPage = () => {
  let dispatch = useDispatch();
  
  let Category=useSelector((state)=>state.categorises.Category);
  let navigator = useNavigate();
  let nameRef=useRef();


  let setCategoryname=()=>{
    nameRef.current.value = Category.name;
  }
   useEffect(setCategoryname,[]);

  let onsubmithandler =(event)=>{
      event.preventDefault();
        
      if(checkData()){

         save();
       }
      };
      let checkData = () => {
        if (nameRef.current.value != "") {
          return true;
        }
        alert("Enter Require data");
        return false;
      };
      let save=()=>{
        let UpdateCategory =new category(Category.id,nameRef.current.value);
       dispatch(categoriseAction.update({ Category: UpdateCategory }));
        
      
          

         navigator(-1); 
        

      };
    
 
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Update {Category.Name ??"-"}</h1>
      </div>
<form className="row mt-5" onSubmit={onsubmithandler}>
        <div className="col-md-12">
          <div className="form-outline mb-4">
            <label className="form-label">category name </label>
            <input
              type="texy"
              id="loginName"
              ref={nameRef}
              className="form-control"
              placeholder="category name"
           
             
              
            />
          </div>
        </div>

      
      

        <div>
          <button type="submit" className="pull-right btn btn-main mb-4">
           Update category
          </button>
        </div>
  </form>
     
    </main>
  );
};
export default UpdateCategoryPage;
