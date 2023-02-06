import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Catogreyitem from "../Componet/catogrey-item";
import Navpanal from "../Componet/panal-pages/Nav-panal";
import { categoriseAction } from "../redux/categorise-slice";
import "../Resource/css/categoriesstyle.css";


let Catogry =()=>{
  let categories = useSelector((state)=>state.categories.data)
return <section className="main-section">
        <section className="sidebar">  
        <Navpanal/>
</section>
<section className="main-content">
        <div>
          <span className="info">Hi <span className="username">Mohammed,</span></span>
         
        </div>
        <span className="all-categories">All Categories</span>
<section className="categories-section">
     <div className="category-item-row">

   {categories.map((element) =>  (<Catogreyitem key={element.id} categories={element}/>  ))}

   
   
            <div className="category-item create-category-item">
              <span>
                <NavLink    className={(props) =>
                props.isActive ? "active" : "in-active"
              }
              to="/Panal/Catogry/Addcategory"
              end
            >
                  <i className="fas fa-plus"></i>
                  <span>Create new category</span>
                </NavLink>
              </span>
            </div>
          </div>
          </section>
          </section>
          </section>

         

}
export default Catogry;