import Panaltable from "../Componet/panal-pages/Panal-table"
import { Fragment } from "react"
import Navpanal from "../Componet/panal-pages/Nav-panal"
import "../Resource/css/cpanelstyle.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { tasksAction } from "../redux/tasks-slice"
import { propTypes } from "react-bootstrap/esm/Image"

let Panal =()=>{
  let Navigater = useNavigate ();
  let dispatch=useDispatch();
  let categories=useSelector((state)=>state.categories.data)
  let tasks = useSelector((state) => state.tasks.filteredData);
 
  let onCategoryFilterChangeHandler =(event)=>{
    dispatch(tasksAction.filterBYCategory(event.target.value));
      }

      let onCategoryFiltersortHandler=(event)=>{
        dispatch(tasksAction.filterBYDate(event.target.value));
      }
      let onSearchChangeHandler = (event) =>{
    
        dispatch(tasksAction.filterBySearch(event.target.value));
          }
  let onclickHandler =()=>{
    Navigater("/Panal/Addblog");

  }
    return  (<Fragment>
      <section className="main-section">
      <section className="sidebar">
<Navpanal/>
      </section>
      <section className="main-content">
        <div>
          <span className="info">Hi <span className="username">Mohammed,</span></span>
          <input type="text" placeholder="Search"   onChange={onSearchChangeHandler}/>
        </div>
        <span className="all-blogs">All Blogs</span>
        <div className="filter">
          <div className="filter-group">
            <div className="filter-icon">
              <a href="#">
                <i className="fas fa-filter"></i>
              </a>
            </div>
            <select onClick={onCategoryFiltersortHandler}>
            <option value="All"><span>Sort by: </span>  <span> All</span></option>
          {tasks.map((element) => (   <option value={element.categoryDate}>
                <span>Sort by:</span><span>{element.categoryDate}</span>
              </option>))}
            </select>
            <select onClick={onCategoryFilterChangeHandler}>
            <option value="All"><span>Category: </span>  <span> All</span></option>
            {categories.map((element) => (   <option value={element.id}><span>Category: </span><span> {element.name}</span></option>      ))}
            </select>
            <div className="delete-icon">
              <a href="#"><i className="far fa-trash-alt icon"></i></a>
            </div>
          </div>
        
          <div className="btn" onClick={onclickHandler}>
            <button className="create">Create New Blog</button>
            
          
          </div>
        </div>
        <section className="table">
<table>
  <thead>
    <tr>
      <th><input type="checkbox" name="" id="" /></th>
      <th>Category</th>
      <th>Blog title</th>
      <th>Due date</th>
      <th>Publisher</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {tasks.map((element) =>(<Panaltable tasks={element} key={element.id} />
            ))}
        </tbody>
</table>
</section>
        </section>
        </section>
        </Fragment>
)}
export default Panal;