import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryRow from "../../components/Categories/CategoryRow";
import CategoriesController from "../../controllers/categories-controller";
import { categoriesActions } from "../../redux/categories-slice";
// import CategoryRow from "../../components/Categories/CategoryRow";
// import CategoryRow from "../../components/Categories/CategoryRow";

let CategoriesPage = () => {
  let categories = useSelector((state) => state.categories.data);
// FB
let dispatch = useDispatch();
let categoryController = new CategoriesController();

let fetchData = async () =>{
let categories = await categoryController.read();
dispatch(categoriesActions.read(categories));
};

useEffect(()=>{fetchData()},[]);
// End FB


  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2 mt-3">Categories</h1>
      </div>

      <div className="row mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((element) => (
              <CategoryRow key={element.id} category={element} />
            ))}
          </tbody>
        </table>
        {/* {categories.map((element) => (
            <CategoryRow key={element.id} category={element} />
          ))} */}
      </div>
    </main>
  );
};

export default CategoriesPage;
