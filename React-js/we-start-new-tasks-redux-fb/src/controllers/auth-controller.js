import axios from "axios";

class AuthController {
  async login(email, password) {
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDx020bZ63HL488WNVDUvJXY2n4NcmT40I`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      console.log(response.data);
      return {
        status: true,
        message: "LoggedIn Successfully",
        token: response.data.idToken,
      };
    } catch (error) {
      console.log(error.response);
      return {status:false,message:error.response.data.error.message}
    }
  }
  async register(email, password) {
    try {
      let response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDx020bZ63HL488WNVDUvJXY2n4NcmT40I`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      );
      console.log(response.data);
      return {status:true,message:"Regester Successfully!",token:response.data.idToken}
    } catch (error) {
      console.log(error.response);
      return {status:false,message:"Registeration failed , try again"};
    }
  }
}

export default AuthController;
