import { Fragment } from "react";
import Navdashborad from "../../components/Dasborad/Nav-dasborad"

let Addcatogry =()=>{
return <Fragment>
 <header class="navbar sticky-top navbar-light bg-light flex-md-nowrap p-0 shadow">
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Momen Task</a>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <a class="nav-link px-3 btn-light-main btn" href="#">Sign out</a>
    </div>
  </div>
</header>

<div class="container-fluid">
  <div class="row">
  

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2 mt-3">Add New Task </h1>
        
      </div>
      
      <Navdashborad/>
      <form>
      <div class="form-outline mb-4">
         <label  class="form-label">Catogry name</label>
        <input type="text" id="loginName" class="form-control" placeholder="Catogry name"/>
      </div> 
      <div>
  <button type="submit" class="pull-right btn btn-main mb-4">Add New Catogery</button>

</div>
      </form>
      </main>
      
</div></div>
</Fragment>
}
export default Addcatogry;