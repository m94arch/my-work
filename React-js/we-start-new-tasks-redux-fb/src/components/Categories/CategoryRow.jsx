import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import CategoriesController from "../../controllers/categories-controller";
import { categoriesActions } from "../../redux/categories-slice";

let CategoryRow = (props) => {
  let dispatch = useDispatch();
  let categoriesController = new CategoriesController();

  let onDeleteHandler =async () => {
    // FB
  let result =  await categoriesController.delete(props.category.id);
  if(result){
  dispatch(categoriesActions.delete(props.category.id));

  }  
  // End FB
  // dispatch(categoriesActions.delete(props.category.id));
  };
  return (
    <tr>
      <th scope="row">{props.category.id}</th>
      <td>{props.category.name}</td>
      <td>
        
        <div className="btn-group" role="group" aria-label="Basic example">
          <NavLink to={`/dashboard/categories/${props.category.id}/update`}>
            <button type="button" className="btn btn-info">
              Update
            </button>
          </NavLink>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onDeleteHandler}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
export default CategoryRow;
