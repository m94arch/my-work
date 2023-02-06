//modules: require
const express = require("express");
const { login } = require("../controllers/auth-controller");

//Router: instance
const router = express.Router();

/**
 * @method POST
 * @controllerMethod login
 */
router.post("/login", [], login);

//module: exports
module.exports = router;
