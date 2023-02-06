

import { useSelector } from "react-redux";
import Categoryrow from "../../components/categories/categoryrow";


let CategoriesPage =()=>{

    let categorises = useSelector((state)=>state.categorises.data)
    return(   <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2 mt-3">Categories</h1>
    </div>
    <div className="row mt-5">
    <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>
   
    
     {categorises.map((element) => (<Categoryrow key={element.id} category={element} />
            ))}

  </tbody>
</table>
  
 
                
          </div>
    </main>
    );
    };
    export default CategoriesPage;