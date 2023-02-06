const Note = require("../models/Note");

exports.index = async (req, res) => {
  // let data = await Note.findAll();
  // let data = await Note.all().orderBy("id", "DESC").get();
  // let data = await Note.where("title", "LIKE", "%F%", "OR")
  //   .where("id", ">=", 11)
  //   .orderBy("title", "DESC")
  //   .get();

  let data = await Note.where("id", ">", 11).count();

  return res.status(200).json({ status: true, message: "Success", data: data });
};

exports.show = async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (note != null) {
    let user = await note.user();
    return res
      .status(200)
      .json({ status: true, message: "Success", object: user });
  } else {
    return res.status(404).json({ status: false, message: "Not Found - 404" });
  }
};

exports.store = async (req, res) => {
  let note = new Note(req.body.title, req.body.info, req.body.user_id);
  const saved = await note.save();
  if (saved) {
    return res.status(201).json({
      status: true,
      message: "Note created successfully",
      object: note,
    });
  } else {
    return res
      .status(400)
      .json({ status: false, message: "Failed to create note" });
  }
};

exports.update = async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (note != null) {
    note.title = req.body.title;
    note.info = req.body.info;
    note.userId = req.body.user_id;
    let updated = await note.update();
    return res.status(updated ? 200 : 400).json({
      status: updated,
      message: updated ? "Updated successfully" : "Update failed",
    });
  } else {
    return res.status(404).json({ status: false, message: "Not Found" });
  }
};

exports.destroy = async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (note != null) {
    const deleted = await note.delete();
    return res.status(deleted ? 200 : 400).json({
      status: deleted,
      message: deleted ? "Deleted successfully" : "Delete failed",
    });
  } else {
    return res.status(404).json({ status: false, message: "Not Found" });
  }
};
