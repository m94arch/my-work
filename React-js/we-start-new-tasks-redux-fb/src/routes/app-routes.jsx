import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import CategoriesPage from "../pages/Dashboard/categoriesPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import NewCategoryPage from "../pages/Dashboard/NewCategoryPage";
import NewTaskPage from "../pages/Dashboard/NewTaskPage";
import TaskDetailsPage from "../pages/Dashboard/TaskDetailsPage";
import TasksPage from "../pages/Dashboard/TasksPage";
import LoginPage from "../pages/LoginPage";
import UpdateCategoryPage from "../pages/Dashboard/UpdateCategoryPage";
import UpdateTaskPage from "../pages/Dashboard/UpdateTaskPage";
import { useSelector } from "react-redux";
let AppRoutes = () => {
  let loggedIn = useSelector((state)=>state.auth.loggedIn);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to = "/login"/>}>
        <Route path="/dashboard" element={<TasksPage />} />
        <Route path="/dashboard/tasks/new" element={<NewTaskPage />} />
        <Route path="/dashboard/categories" element={<CategoriesPage />} />
        <Route path="/dashboard/categories/new" element={<NewCategoryPage />} />
        <Route path="/dashboard/categories/:id/update" element={<UpdateCategoryPage />} />
        <Route
          path="/dashboard/tasks/:id/details"
          element={<TaskDetailsPage />}
        />
         
        <Route path="/dashboard/tasks/update" element={<UpdateTaskPage/>}/>
      </Route>
    </Routes>
  );
};
export default AppRoutes;
