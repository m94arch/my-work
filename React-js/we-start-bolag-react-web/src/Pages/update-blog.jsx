import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Navpanal from "../Componet/panal-pages/Nav-panal";
import TaskBlog from "../models/task-blog";
import { categoriseAction } from "../redux/categorise-slice";
import { tasksAction } from "../redux/tasks-slice";

let Updatebalog=()=>{
    let Navigater=useNavigate();

    let TitleRef = useRef();
    let PublisherRef=useRef();
   let DescriptionRef = useRef();
   let CategoryRef = useRef();
   let DateRef=useRef();
    
    let categories=useSelector((state)=>state.categories.data)
    let task = useSelector((state) => state.tasks.task);
    let dispatch=useDispatch(); 

  
  let OncancelHandler=()=>{
    Navigater("/Panal")
  }
   let onsubmithandler =(event)=>{
      event.preventDefault();
        
      if(checkData()){
  
         save();
         clear();

        Navigater("/Panal")
       }
      };
      let clear =()=>{
        TitleRef.current.value = ""; 
        PublisherRef.current.value="";
        DateRef.current.value = "";
        DescriptionRef.current.value="";
         CategoryRef.current.value = "";
    
     
        
      }
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
      let updatetask = new TaskBlog(
       task.id,
       TitleRef.current.value,
       PublisherRef.current.value,
       DescriptionRef.current.value,
       Category.id,
       Category.name,
       DateRef.current.value,

     );
      
      dispatch(tasksAction.update({task:updatetask}));
      
      console.log(task.title);
      

    
    };
 
    let settask=()=>{
        TitleRef.current.value = task.title;
        PublisherRef.current.value = task.Publisher;
        DateRef.current.value = task.categoryDate;
        DescriptionRef.current.value = task.description;
      };
      useEffect(settask, []);

return <section className="main-section">
<section className="sidebar">  
<Navpanal/>
</section>
<section className="mainnn">
<form  onSubmit={onsubmithandler}>
<div className="h1">
  <span>Update blog</span>
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
      
    </div>
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
export default Updatebalog;