import  MainImage from "../../Resource/images/🍎Icon_1.png"
import { NavLink } from "react-router-dom";
import Siginin from "./sigin-in";

let Navpanal=()=>{
return  <div>
<h2><span className="blogs">B</span>LOGS</h2>
<span className="admin-tools">Admin tools</span>

<div className="list">
  <div className="list-item">
    <img src={MainImage} alt="" /> <a href="#">Overview</a>
  </div>
  <div className="list-item">
  <i className="far fa-compass"></i>
  <NavLink
              className={(props) =>
                props.isActive ? "active" : "in-active"
              }
              to="/Panal" 
              end
            >
              All Blogs
            </NavLink>
</div>
    
    
 
<div className="list-item">
  <i className="far fa-compass"></i>
  <NavLink
              className={(props) =>
                props.isActive ? "active" : "in-active"
              }
              to="/Panal/Catogry"
              end
            >
              Categories
            </NavLink>
</div>


 

  <div className="list-item">
    <i className="fas fa-cog"></i><a href="#">Settings</a>
  </div>

  <span className="insights">Insights</span>
  <div className="list-item">


    <i className="far fa-bell"></i>
    
    
    <NavLink
              className={(props) =>
                props.isActive ? "active" : "in-active"
              }
              to="/Panal/Notification"
              end
            >
             Notifications

            </NavLink>


    <span className="notification">2</span>
  </div>
  <Siginin/>
</div>

</div>

}
export default Navpanal;