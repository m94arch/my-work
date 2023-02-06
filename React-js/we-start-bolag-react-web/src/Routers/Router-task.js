import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Addblog from "../Pages/add-blog";
import Addcategory from "../Pages/add-category";
import Catogry from "../Pages/Catogry";
import Notifications from "../Pages/Notifications";

import Panal from "../Pages/Panal";
import Updatebalog from "../Pages/update-blog";


let Routertask =()=>{
return (

<Routes>

<Route path="/Panal" element={<Panal/>} />
<Route path="/Panal/Catogry" element={<Catogry/>} />
<Route path="/Panal/Notification" element={<Notifications/>} />
<Route path="/Panal/Addblog" element={<Addblog/>} />
<Route path="/Panal/Catogry/Addcategory" element={<Addcategory/>}/>
<Route path="/Panal/Catogry/Update" element={<Updatebalog/>} />


</Routes> 
    
)
}
export default Routertask;