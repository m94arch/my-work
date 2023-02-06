import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriseAction } from "../redux/categorise-slice";
import Rowdisplaycatgory from "./row-display-catgory";

let Displaycatgory =()=>{
    let categories = useSelector((state) => state.categories.data);

   
return <Fragment> 
    <div className="content-detail">
<h4>All Categories</h4>
<table>
    <thead>
        <tr>
            <th>Category</th>
            <th>Type</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    </thead>
    {categories.map((element) =>  (<Rowdisplaycatgory key={element.id} categories={element}/>  ))}
</table>
</div>
</Fragment>
}
export default Displaycatgory;