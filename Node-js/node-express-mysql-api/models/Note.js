const db = require("../utils/database");

module.exports = class Note {
  constructor(title, info, userId, id) {
    this.id = id;
    this.title = title;
    this.info = info;
    this.userId = userId;
  }

  mySQLQyery = "";

  static async findAll(columns = "*") {
    let result = await db.execute(`SELECT ${columns} FROM notes`);
    return result[0];
  }

  static async findById(id, columns = "*") {
    let result = await db.execute(
      `SELECT ${columns} FROM notes WHERE id = ${id}`
    );
    if (result[0].length > 0) {
      let object = result[0][0];
      return new Note(object.title, object.info, object.user_id, object.id);
    } else {
      return null;
    }
  }

  async save() {
    try {
      let result = await db.execute(
        "INSERT INTO notes (title, info, user_id) VALUES (?, ?, ?)",
        [this.title, this.info, this.userId]
      );
      this.id = result[0].insertId;
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async update() {
    try {
      let result = await db.execute(
        "UPDATE notes SET title = ?, info = ?, user_id = ? WHERE id = ?",
        [this.title, this.info, this.userId, this.id]
      );
      return result[0].affectedRows > 0;
    } catch (error) {
      return false;
    }
  }

  async delete() {
    let result = await db.execute("DELETE FROM notes WHERE id = ?", [this.id]);
    return result[0].affectedRows > 0;
  }

  //belongsTo - User 1 => 1
  async user() {
    let result = await db.execute(
      "SELECT u.id, u.name, u.email FROM users u JOIN notes n ON u.id = n.user_id WHERE n.id = ?",
      [this.id]
    );
    return result[0][0];
  }

  static where(column, operator = "=", value = "", condition = "") {
    //WHERE name = value OR
    if (this.mySQLQyery === undefined) {
      this.mySQLQyery = ` WHERE ${column} ${operator} '${value}' ${condition}`;
    } else {
      this.mySQLQyery += ` ${column} ${operator} ${value} ${condition}`;
    }
    return this;
  }

  static orderBy(column = "id", type = "ASC") {
    this.mySQLQyery += ` ORDER BY ${column} ${type}`;
    return this;
  }

  //EXECUTIVE FUNCTIONS
  static async get(columns = "*") {
    let result = await db.execute(
      `SELECT ${columns} FROM notes ${this.mySQLQyery}`
    );
    console.log(`SELECT ${columns} FROM notes ${this.mySQLQyery}`);
    return result[0];
  }

  static async count() {
    let result = await db.execute(
      `SELECT COUNT(*) as COUNT FROM notes ${this.mySQLQyery}`
    );
    console.log(`SELECT COUNT(*) as COUNT FROM notes ${this.mySQLQyery}`);
    return result[0];
  }
};
