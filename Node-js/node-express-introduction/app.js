const bodyParser = require("body-parser");
const express = require("express");
const HttpError = require("./models/HttpError");
const userRoutes = require("./routes/app-routes");

const app = express();

app.use(bodyParser.urlencoded());

//app.user('/prefix-uri',exported-routes-module)
app.use("/api/users", userRoutes);

//fallback route
app.use("/", (req, res) => {
  // res.status(404).json({ status: false, message: "Not found" });
  const notFoundError = new HttpError(404, "Not found");
  // res.status(notFoundError.code).json({ message: notFoundError.message });
  // console.log(error);
  throw notFoundError;
});

app.use((error, req, res, next) => {
  res.status(error.code).json({ message: error.message });
});

app.listen(5000);
