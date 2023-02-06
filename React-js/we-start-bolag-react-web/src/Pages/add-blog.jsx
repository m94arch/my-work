import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navpanal from "../Componet/panal-pages/Nav-panal";
import Categoriesblog from "../models/categories-blog";
import TaskBlog from "../models/task-blog";
import { tasksAction } from "../redux/tasks-slice";
import "../Resource/css/add-blog-style.css"



let Addblog =()=>{
  let Navigater=useNavigate();
  let categories=useSelector((state)=>state.categories.data)
  let dispatch=useDispatch(); 
   let TitleRef = useRef();
   let PublisherRef=useRef();
  let DescriptionRef = useRef();
  let CategoryRef = useRef();
  let DateRef=useRef();

let OncancelHandler=()=>{
  Navigater("/Panal")
}
 let onsubmithandler =(event)=>{
    event.preventDefault();
      
    if(checkData()){

       save();
       clear();
      /* Navigater("/Panal")*/
     }
    };
  let checkData = () => {
    if (
      TitleRef.current.value != "" &&
      PublisherRef.current.value !=""&&
      CategoryRef.current.value != "" &&
      DateRef.current.value!=""&&
      DescriptionRef.current.value != "" 
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
    let task = new TaskBlog(
     Date.now(),
     TitleRef.current.value,
     PublisherRef.current.value,
     DescriptionRef.current.value,
     Category.id,
     Category.name,
     DateRef.current.value,
   );
    
    console.log(task);
    dispatch(tasksAction.create(task));
    clear();
  };
  let clear =()=>{
    TitleRef.current.value = ""; 
    PublisherRef.current.value="";
    DateRef.current.value = "";
    DescriptionRef.current.value="";
     CategoryRef.current.value = "";

 
    
  }
return <section className="main-section">
        <section className="sidebar">  
        <Navpanal/>
</section>
<section className="mainnn">
      <form  onSubmit={onsubmithandler}>
        <div className="h1">
          <span>Add new blog</span>
          <a href="#">
            <img src="images/Option.png" alt="" />
          </a>
        </div>
        <div className="add-blog">
          <a href="#">
            <i className="fas fa-plus"></i>
          </a>
        </div>
        <div className="All">
          <section className="left-section">
            <div className="form-group">
              <label>Blog title</label>
              <input
                className="inputt"
                type="text"
                placeholder="Blog name"
                ref={TitleRef}
              
              />
            </div>
            <div className="form-group">
              <label>Publisher name</label>
              <input
                className="inputt"
                type="text"
                placeholder="Ex. mohammed "
                ref={PublisherRef}
            
              />
                 <div className="col-md-6">
          <div className="form-outline mb-4">
            <label className="form-label"> date</label>
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Task name"
           ref={DateRef}
            />
          </div>
        </div>
        
            </div>
            <div className="form-group">
              <label>Category</label>
              <select className="inputt" ref={CategoryRef}>
              {categories.map((element) => (
                  <option value={element.id}>{element.name}</option>
                ))}
            

              </select>
            </div>
          </section>
          <section className="right-section">
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="textarea"
                cols="50"
                rows="10"
                placeholder="Write the description"
                ref={DescriptionRef}
             
              ></textarea>
            </div>
          </section>
        </div>

        <div className="btns2">
          <button onClick={OncancelHandler} >Cancel</button>
          <button type="submit">Done</button>
        </div>
      </form>
    </section>

</section>

}
export default Addblog;