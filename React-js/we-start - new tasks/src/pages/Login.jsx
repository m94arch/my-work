import { Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import "../resourse/css/custom.css"
import Signup from "../components/login/Sign-up"
import Register from "../components/login/Register"


let Login =()=>{
return   <Fragment>    
<div class="container-fluid p-5 bg-primary text-white text-center login-cover">
 
</div>
<div class="container ">

  <div class="row">

 
  	 <div class="col-sm-1"></div>

    <div class="col-sm-10">
   <div class="shadow-5-strong form-box">
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="tab-login" data-bs-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tab-register" data-bs-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>

<div class="tab-content">
<Signup/>
<Register/> 
</div> 

</div>

   </div>
 
  	 <div class="col-sm-1"></div>
  	
  </div> 
  </div>
  </Fragment>}
export default Login;