//require modules
const express = require("express");
const {
  index,
  show,
  store,
  update,
  destroy,
} = require("../controllers/note-controller");

//express: Router instance
const router = express.Router();

//router: routes
router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

//module: export
module.exports = router;

/**
 * Routes Naming:
 *  - index     GET     http://127.0.0.1:5000/api/notes
 *  - show      GET     http://127.0.0.1:5000/api/notes/{:note}
 *  - create    GET     http://127.0.0.1:5000/api/notes/create
 *  - store     POST    http://127.0.0.1:5000/api/notes
 *  - edit      GET     http://127.0.0.1:5000/api/notes/{:note}/edit
 *  - update    PUT     http://127.0.0.1:5000/api/notes/{:note}
 *  - destroy   DELETE  http://127.0.0.1:5000/api/notes/{:note}
 */
