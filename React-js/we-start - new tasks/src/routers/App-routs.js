import { Route, Routes } from "react-router-dom";
import Dashborad from "../pages/Dasborad/Dashborad";
import Login from "../pages/Login";
import NewTask from "../pages/Dasborad/New-Task";
import Addcatogry from "../pages/Dasborad/Add-catogry";

let Approuts =()=>{
return <Routes>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Dashborad" element={<Dashborad/>} />
    <Route path="/Dashborad/NewTask" element={<NewTask/>} />
    <Route path="/Dashborad/NewTask/catogry" element={<Addcatogry/>} />

</Routes>
}
export default Approuts;