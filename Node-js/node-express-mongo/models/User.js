//require: modules
//mongodo
const mongodb = require("mongodb");
const { database } = require("../utils/database");

module.exports = class User {
  constructor(name, email, mobile, password, age, id) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
    this.age = age;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  async save() {
    return await database().collection("Users").insertOne(this);
  }

  async update() {
    return await database()
      .collection("Users")
      .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
  }

  async delete() {
    return await database()
      .collection("Users")
      .deleteOne({ _id: new mongodb.ObjectId(this._id) });
  }

  static async findAll() {
    return await database().collection("Users").find().toArray();
  }

  static async findById(id) {
    try {
      let user = await database()
        .collection("Users")
        .find({ _id: new mongodb.ObjectId(id) })
        .next();
      return new User(
        user.name,
        user.email,
        user.mobile,
        user.password,
        user.age,
        user._id
      );
    } catch (error) {
      return null;
    }
  }
};
