//require: modules
//module: mongodb
const mongodb = require("mongodb");

//mongodb: client
const MongoClient = mongodb.MongoClient;

//mongodb: instance
let db;

//- mongodb://localhost:27017
//-- mongodb://localhost:27017
exports.connect = (callback) => {
  MongoClient.connect("mongodb://127.0.0.1:27017/we_start_db")
    .then((client) => {
      console.log("Conntected to client successfully");
      db = client.db();
      callback(true, db);
    })
    .catch((error) => {
      console.log("Failed to connect");
      callback(false, null);
    });
};

exports.database = () => {
  return db;
};
