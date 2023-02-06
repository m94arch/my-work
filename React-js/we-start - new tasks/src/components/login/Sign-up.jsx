import SocialIcons from "./SocialIcons";
let Signup =()=>{
return   <div class="tab-pane  fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
<form>
<SocialIcons/>

  <h4 class="mb-5 mt-2 text-center">or</h4>

  <div class="form-outline mb-4">
    <input type="email" id="loginName" class="form-control"  placeholder="Email or username" />
   
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="loginPassword" class="form-control" placeholder="Password" />
 
  </div>

  <div class="row mb-4">
    <div class="col-md-6 d-flex justify-content-center">
      <div class="form-check mb-3 mb-md-0">
        <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
        <label class="form-check-label" for="loginCheck"> Remember me </label>
      </div>
    </div>

    <div class="col-md-6 d-flex justify-content-center">
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  <button type="submit" class="btn btn-main btn-block mb-4">Sign in</button>

  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
  </div>
</form>
</div>
}
export default Signup