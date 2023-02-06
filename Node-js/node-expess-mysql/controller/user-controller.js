const User = require("../models/user");

exports.index = (req, res) => {
  let data = User.all();
  res.status(200).json({});
};

exports.show = (req, res) => {
  let item = User.find(1);
  res.status(200).json({});
};

exports.store = (req, res) => {
  let user = new User();
  user.name = "";
  let isSaved = user.save();
  res.status(200).json({});
};

exports.update = (req, res) => {
  let user = User.find(1);
  user.name = "UpdatedName";
  let isUpdated = user.update();
  res.status(200).json({status: true, message: "Welcome in Node.js"});
};

exports.destroy = (req, res) => {
  let deleted = User.destroy(1)
    .then((value) => {})
    .catch((reason) => {});
  res.status(200).json({});
};

// exports.save = save;

/**
 * Controllers:
 *  - Normal Controllers (Empty)
 *  - Resoruce Controllers
 *      - Web (7)
 *          - index, show, create, store, edit, update ,destroy
 *      - API (5)
 *          - index, show, store, update, destroy
 */
