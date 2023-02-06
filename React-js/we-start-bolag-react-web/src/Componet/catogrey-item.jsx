import { useDispatch } from "react-redux";
import { categoriseAction } from "../redux/categorise-slice";

let Catogreyitem =(props)=>{
  let dispatch = useDispatch();

    let onDeleteCategoryHandler = () =>{
        dispatch(categoriseAction.delete(props.categories.id));
    }

    return    <div class="category-item">
    <div>
      <div>
        <span class="design">{props.categories.name}</span>
        <span class="blog-no">{new Date().toDateString()}</span>
        <span class="checked"><input type="checkbox" /> {props.categories.id}</span>
        
      </div>
      <div class="delete-icon" onClick={onDeleteCategoryHandler}>
        <a href="#"><i class="far fa-trash-alt icon"></i></a>
      </div>
    </div>
  </div>
}

export default Catogreyitem;