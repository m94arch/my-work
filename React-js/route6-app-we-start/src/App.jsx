import { Fragment } from "react";
import { NavLink, Route, Router, Routes, useNavigate } from "react-router-dom";
import "../src/style.css"

let App =()=>{
    let navigator=useNavigate();
return  <Fragment>
<ul>
    <li>
        <NavLink to="/Frist" className={(props) => (props.isActive ? "active" : "in-active")} > Frist</NavLink>
    </li>


    <li>
        <NavLink to="/secand" className={(props) => (props.isActive ? "active" : "in-active") }   end>secand</NavLink>
    </li>
    
    <li>
        <NavLink to="/secand/thrid" className={(props) => (props.isActive ? "active" : "in-active")}  end>thrid</NavLink>
    </li>

    <li>
        <NavLink to="/secand/thrid/fourth" className={(props) => (props.isActive ? "active" : "in-active")}  end>fourth</NavLink>
    </li>

</ul>
<div>
        <button onClick={() => navigator("/first" ) }>First</button>
        <button
          onClick={() => navigator("/second/third/fourth" ,{ replace: true })}
        >
          Fourth
        </button>
      </div>

<Routes>
<Route path="/Frist"  element={<h4>First</h4>}/> 

<Route  path="/secand" element={<h4>secand</h4>}/> 

<Route  path="/secand/thrid"element={<h4>thrid</h4>}/> 

<Route   path="/secand/thrid/fourth"element={<h4>fourth</h4>}/> 

</Routes>
</Fragment>
}
export default App;