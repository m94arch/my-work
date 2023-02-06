const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  /**
   * 1- Get user by unique login entity (ex: email)
   * 2- If exists, compare hashes
   *    - The original hashed password in document with the sent password in request (must be hashed)
   * 3- If true, create Token
   * 4- Set user data in ??????
   */

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user != null) {
      let correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (correctPassword) {
        let token = jwt.sign(
          { email: user.email, id: user._id },
          "we-start-secret-key-jwt-$*",
          {
            expiresIn: "1h",
          }
        );
        // user.token = token;
        return res.status(400).json({
          status: false,
          message: "Logged in successfully",
          user: user,
          token: token,
        });
      } else {
        return res.status(400).json({
          status: false,
          message: "Error credentials, check email or password",
        });
      }
    } else {
      return res.status(400).json({
        status: false,
        message: "Error credentials, check email or password",
      });
    }
  } catch (error) {}
};
