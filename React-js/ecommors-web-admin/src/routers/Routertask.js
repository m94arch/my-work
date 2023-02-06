import { Route, Routes } from "react-router-dom";
import Categorypage from "../pages/Category-page";
import Homepage from "../pages/Home-page";
import Orderpages from "../pages/order-pages";
import Productpage from "../pages/Prouduct-pages";
import Stockpage from "../pages/Stock-page";
import UpdateCategorypage from "../pages/Update-Category-page";
import UpdateProductpage from "../pages/Update-Prouduct-pages";

let Routertask =()=>{
    return <Routes>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/Homepage/Categorypage" element={<Categorypage/>}/>
        <Route path="/Homepage/Categorypage/UpdateCategorypage" element={<UpdateCategorypage/>} />
        <Route path="/Homepage/Orderpages" element={<Orderpages/>}/>
        <Route path="/Homepage/Productpage" element={<Productpage/>}/>
        <Route path="/Homepage/Productpage/UpdateProductpage" element={<UpdateProductpage/>}/>
        <Route path="/Homepage/Stockpage" element={<Stockpage/>}/>


    </Routes>
}
export default Routertask;