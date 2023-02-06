import { Fragment } from "react"
import { NavLink } from "react-router-dom";

let Navpages =()=>{
    return <Fragment>
        	<div className="sidebar">
				<h3>Menu</h3>
				<ul>


				<li>
					<NavLink
              className={(props) =>
                props.isActive ? "active" : "in-active"
              }
              to="/Homepage" 
              end
            >
             Home
            </NavLink>
			</li>

					
				<li>
					<NavLink
              className={(props) =>
                props.isActive ? "active" : "in-active"
              }
              to="/Homepage/Orderpages" 
              end
            >
             Order
            </NavLink>
			</li>



					<li>
					<NavLink
              className={(props) =>
                props.isActive ? "active" : "in-active"
              }
              to="/Homepage/Productpage" 
              end
            >
             Product
            </NavLink>
			</li>



					<li>
					<NavLink
              className={(props) =>
                props.isActive ? "active" : "in-active"
              }
              to="/Homepage/Categorypage" 
              end
            >
             Category
            </NavLink>
			</li>
			


			<li>
					<NavLink
              className={(props) =>
                props.isActive ? "active" : "in-active"
              }
              to="/Homepage/Stockpage"
              end
            >
             Stock
            </NavLink>
			</li>


			
					<li><a href="">Users</a></li>
				</ul>				
			</div>
    </Fragment>
}
export default Navpages;