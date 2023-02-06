import { NavLink } from "react-router-dom";

let Navdashborad =()=>{
    return <div className="container-fluid">
    <div className="row">
      <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">

           <li className="nav-item">
         
           <NavLink
              className={(props) =>
                props.isActive ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              to="/Dashborad" 
              end
            >
              <span data-feather="home"></span>
              Tasks
            </NavLink>
            </li>
           
            
            <li className="nav-item">
            <NavLink
              className={(props) =>
                props.isActive ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              to="/Dashborad/NewTask"
              end
            >
              <span data-feather="file"></span>
              Add New Task
            </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                <span data-feather="file"></span>
                Update catogrey
              </a>
            </li>
            
            <li className="nav-item">
            <NavLink
              className={(props) =>
                props.isActive ? "nav-link active" : "nav-link"
              }
              aria-current="page"
              to="/Dashborad/NewTask/catogry"
              end
            >
             <span data-feather="file"></span>
                Add catogrey
            </NavLink>
               
              

            </li>
     
       
          </ul>
  
          
        </div>
      </nav>
  
     
    </div>
  </div>
}
 export default Navdashborad;