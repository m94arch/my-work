import "../Resource/css/c-panel-1-style.css"
import FormRange from "react-bootstrap/esm/FormRange";
import Navpanal from "../Componet/panal-pages/Nav-panal";
import Notificationrow from "../Componet/panal-pages/Notifications-row";
import { useSelector } from "react-redux";


let Notifications =()=>{

  let tasks = useSelector((state) => state.tasks.filteredData);

    return  <section className="main-section">
        <section className="sidebar">  
        <Navpanal/>
        



        
</section>
<section className="main-content">
        <div>
          <span className="info">Hi <span className="username">Mohammed,</span></span>
          <input type="text" placeholder="Search" />
        </div>
        <span className="title">Notifications</span>
        <div>
          <span>Recent Notification</span>
        </div>
        <section className="notifications">
       { tasks.map((element) =>( <Notificationrow tasks={element} key={element.id} />
            ))}
       
          <div className="btn">
            <button>Load More</button>
          </div>
        </section>
      </section>
 </section>  
 
}
export default Notifications;
