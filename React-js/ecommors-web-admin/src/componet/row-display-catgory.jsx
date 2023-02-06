import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriseAction } from "../redux/categorise-slice";

let Rowdisplaycatgory =(props)=>{
    let navigater=useNavigate();

    let dispatch=useDispatch()

  let onupdateHandler=()=>{
   
    dispatch(categoriseAction.edit(props.categories.id));
        navigater("/Homepage/Categorypage/UpdateCategorypage");
       

  }

  let onDeleteBlogHandler =()=>{
    dispatch(categoriseAction.delete(props.categories.id));

  }
return <Fragment>
     <tbody>
        <tr>
            <td>{props.categories.name}</td>
            <td>{props.categories.typess}</td>
            <td><button onClick={onupdateHandler}>Edit</button></td>
            <td> <button onClick={onDeleteBlogHandler}> Delete</button></td>
        </tr>
    </tbody>
</Fragment>
}
export default Rowdisplaycatgory;