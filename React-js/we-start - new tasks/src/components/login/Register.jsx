let Register =()=>{
    return ( 
    <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
   
    <form>
        <div class="text-center mb-3">
             <h4 class="mb-4 mt-5">Register in Momen Task System  with</h4>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>
  
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>
  
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>
  
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
  
           <h4 class="mb-4 mt-5 text-center">or:</h4>
  
     
        <div class="form-outline mb-4">
          <input type="text" id="registerName" class="form-control" placeholder="Name" />
     
        </div>
  
  
        <div class="form-outline mb-4">
              
          <input type="text" id="registerUsername" class="form-control" placeholder="Username" />
      
        </div>
  
  
        <div class="form-outline mb-4">
          <input type="email" id="registerEmail" class="form-control" placeholder="Email" />
          
        </div>
  
        <div class="form-outline mb-4">
                   
  
          <input type="password" id="registerPassword" class="form-control" placeholder="password" />
        </div>
        <div class="form-outline mb-4">
              
          <input type="password" id="registerRepeatPassword" class="form-control"  placeholder="repeat password" />
       
        </div>
  
        <div class="form-check d-flex justify-content-center mb-4">
          <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
            aria-describedby="registerCheckHelpText" />
          <label class="form-check-label" for="registerCheck">
            I have read and agree to the terms
          </label>
        </div>
  
        <button type="submit" class="btn btn-main btn-block mb-3">Sign in</button>
      </form>
      </div>
)

}
export default Register;