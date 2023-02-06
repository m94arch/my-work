import { Route, Routes } from "react-router-dom";
import CategoriesPage from "../pages/Dashboard/CategoriesPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import NewTaskPage from "../pages/Dashboard/NewTaskPage";
import TaskDetailsPage from "../pages/Dashboard/TaskDetailsPage";
import TasksPage from "../pages/Dashboard/TasksPage";
import LoginPage from "../pages/LoginPage";
import NewCategoryPage from "../pages/Dashboard/NewCategoryPage";
import UpdateCategoryPage from "../pages/Dashboard/UpdateCategoryPage";



let AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard" element={<TasksPage />} />
        <Route path="/dashboard/tasks/new" element={<NewTaskPage />} />
        <Route path="/dashboard/categories" element={<CategoriesPage />} />
        <Route path="/dashboard/categories/New" element={<NewCategoryPage/>} />
        <Route path="/dashboard/categories/Update" element={<UpdateCategoryPage/>} />
        <Route
          path="/dashboard/tasks/details"
          element={<TaskDetailsPage />}
        />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
