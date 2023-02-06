const { index } = require("../controller/note-controller");
const db = require("../utils/database");

module.exports = class User {
  constructor(name, email, mobile, password) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.password = password;
  }

  static all() {
    return db.execute("SELECT * FROM users");
  }

  static find(id) {
    return db.execute("SELECT * FROM users WHERE id = ?", id);
  }

  save() {
    return db.execute(
      "INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)",
      [this.name, this.email, this.mobile, this.password]
    );
  }

  update() {
    return db.execute(
      "UPDATE users SET name = ?, email = ?, mobile= ?, password = ? WHERE id = ?",
      [this.name, this.email, this.mobile, this.password, this.id]
    );
  }

  static destroy(id) {
    return db.execute("DELETE FROM users WHERE id = ?", [id]);
  }
};

/**
 * User.index();
 * -------
 * let user = new User(....);
 * user.store();
 * --------
 * let user = User.get(1);
 * user.name = "Update Name";
 * user.update();
 */

/**
 * SQL:
 * - INSERT:
 *      - INSERT INTO tableName (c1, c2, c3) VALUES (v1, v2, v3)
 *      - INSERT INTO tableName VALUES (v1, v2, v3)
 */
