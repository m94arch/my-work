//modules: require
const express = require("express");
const HttpError = require("./models/HttpError");
//modules: routes
const userRoutes = require("./routes/user-routes");
const authRoutes = require("./routes/auth-routes");

//modules: mongose
const mongoose = require("mongoose");

//express: instance
const app = express();

//app.use: urlEncoded
app.use(express.urlencoded({ extended: true }));

//app.use: routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

//app.use: Fallback route
app.use("/", (req, res, next) => {
  throw new HttpError(404, "Not Found");
});

//app.use: Thrown Error Handler
app.use((error, req, res, next) => {
  return res.status(error.code).json({ status: false, message: error.message });
});

//mongose: connect
mongoose
  .connect("mongodb://127.0.0.1:27017/we_start_db")
  .then((result) => {
    // app: listen
    app.listen(5000);
  })
  .catch((error) => {});
