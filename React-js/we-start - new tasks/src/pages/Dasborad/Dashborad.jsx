import { Fragment } from "react";
import Navdashborad from '../../components/Dasborad/Nav-dasborad'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "../../resourse/css/custom.css"

let Dashborad =()=>{
 return <Fragment>
    <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Momen Task</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3 btn-light-main btn" href="#">Sign out</a>
    </div>
  </div>
</header>
<Navdashborad/>


<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Dashboard</h1>
            <div class=" mb-2 mb-md-0">
    <div class="d-flex align-items-center ms-3 ms-lg-4">     
    </div>
    <div class="d-flex align-items-center ms-3 ms-lg-4">
    </div>
              </div>
      <ul class="list-inline">
      <li class="list-inline-item"> <select class=" dropdown form-control pull-right" placeholder="Filter By status" autocomplete="off">
          <option value="" >Filter By status</option>
          <option value="4">Done</option>
          <option value="1">In Progress</option>
          <option value="3">Complete</option>
          <option value="5">Canceled</option>
        </select></li>
      <li class="list-inline-item mt-3"> <select class=" dropdown form-control pull-right" placeholder="Filter By status" autocomplete="off">
          <option value="" >Filter By category</option>
          <option value="4">Category 1</option>
          <option value="1"> Category 2</option>
          <option value="3">Category 3</option>
          <option value="5">Category 4</option>
        </select></li> 
    </ul>
             </div>
       
    
          <div class="row mt-5">
     
      
            <div class="col-md-4">
              <div class="card task card">
                <img src="img/3.png" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Task title can be here</h5>
                      <h6 class="card-subtitle mb-2 text-muted">    <span data-feather="calendar"></span> 07-10-2022 <span class="main-color">To </span> 23-10-2022</h6>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <hr />
                     <span  class="btn badge-light-warning status-btn Wating">Wating</span>
    
                     <a href="#" class="btn btn-bg-gray pull-right">
                      <span data-feather="arrow-right"></span>
                    </a>
    
                  </div>
                 </div>
                </div>
    
    
            <div class="col-md-4">
              <div class="card task card">
                <img src="img/3.png" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Task title can be here</h5>
                      <h6 class="card-subtitle mb-2 text-muted">    <span data-feather="calendar"></span> 07-10-2022 <span class="main-color">To </span> 23-10-2022</h6>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <hr/>
                     <span  class="btn badge-light-primary inprogress">In Progress</span>
    
                     <a href="#" class="btn btn-bg-gray pull-right">
                      <span data-feather="arrow-right"></span>
                    </a>
                  </div>
                 </div>
                 
               </div>
      
    </div>
    </main>
 </Fragment>
}
export default  Dashborad;