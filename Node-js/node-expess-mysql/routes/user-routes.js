const express = require("express");
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controller/user-controller");

let userRoutes = express.Router();

//api/users
/**
 * @httpMethod get
 * @controller user-controller
 * @controllerMethod index
 */
router.get("/", index);

/**
 * @httpMethod get
 * @controller user-controller
 * @controllerMethod show
 */
router.get("/:id", show);

/**
 * @httpMethod post
 * @controller user-controller
 * @controllerMethod store
 */
router.post("/", store);

/**
 * @httpMethod put
 * @controller user-controller
 * @controllerMethod update
 */
router.put("/:id", update);

/**
 * @httpMethod delete
 * @controller user-controller
 * @controllerMethod destroy
 */
router.delete("/:id", destroy);

module.exports = userRoutes;

/**
 * Routes Naming:
 *  - index     GET     127.0.0.1:5000/api/users
 *  - show      GET     127.0.0.1:5000/api/users/{:user}
 *  - create    GET     127.0.0.1:5000/api/users/create
 *  - store     POST    127.0.0.1:5000/api/users
 *  - edit      GET     127.0.0.1:5000/api/users/{:user}/edit
 *  - update    PUT     127.0.0.1:5000/api/users/{:user}
 *  - destroy   DELETE  127.0.0.1:5000/api/users/{:user}
 */
