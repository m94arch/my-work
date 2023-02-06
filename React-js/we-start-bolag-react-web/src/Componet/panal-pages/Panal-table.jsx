import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskBlog from "../../models/task-blog";
import { categoriseAction } from "../../redux/categorise-slice";
import { tasksAction } from "../../redux/tasks-slice";

let Panltable =(props)=>{
  let Navigater=useNavigate();
  let dispatch=useDispatch()

  let onupdateHandler=()=>{
   
    dispatch(tasksAction.edit(props.tasks.id));
        Navigater("/Panal/Catogry/Update");

  }

  let onDeleteBlogHandler =()=>{
    dispatch(tasksAction.delete(props.tasks.id));

  }
return  <tr>
      <th><input type="checkbox" name="" id="" /></th>
      <td><span className="development">{props.tasks.categoryName}</span></td>
      <td>{props.tasks.title}</td>
      <td>{props.tasks.categoryDate}</td>
      
      <td>{props.tasks.Publisher}</td>
      <td className="actions">
        <button type="submit" onClick={onupdateHandler}><i className="fas fa-pen"></i></button>

        
        
          <button type="submit" onClick={onDeleteBlogHandler}>
        <i className="far fa-trash-alt icon"></i></button>
      </td>
    </tr>
    


}
export default Panltable;