import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { categoriseAction } from "../../redux/categorise-slice";

let Categoryrow =(props)=>{
  let disptach=useDispatch();
  let navigator=useNavigate();
  
  let ondeletehandler=()=>{
    disptach(categoriseAction.delete(props.category.id))
  };
  let onupdateHandler=()=>{
disptach(categoriseAction.edit(props.category.id));
//navigator(`/dashboard/categories/`+props.category.id+`/Update`);
navigator(`/dashboard/categories/Update`);

  };
    return   <tr>
    <th scope="row">{props.category.id}</th>
    <td>{props.category.name}</td>
    <td>
    <div className="btn-group" role="group" aria-label="Basic example" >
     {/* \<NavLink  to={'/dashboard/categories/'+props.category.id+'/Update'} >
<button type="button" className="btn btn-info">update</button></NavLink>*/}
<button type="button" className="btn btn-info" onClick={onupdateHandler}>update</button>

<button type="button" className="btn btn-danger" onClick={ondeletehandler}>delete</button>

</div>
</td>
   
  </tr>

}
export default Categoryrow;