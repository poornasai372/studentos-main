const notesService = require("../services/notesService");

// GET
const getNotes = async (req, res) => {
  const { data, error } = await notesService.getAllNotes();

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
};

// POST
const createNote = async (req, res) => {
  const { data, error } = await notesService.addNote(req.body);

  if (error) {
    return res.status(500).json(error);
  }

  res.status(201).json({
    message: "Note Added Successfully",
    data,
  });
};

// PUT
const editNote = async (req, res) => {
  const { error } = await notesService.updateNote(
    req.params.id,
    req.body
  );

  if (error) {
    return res.status(500).json(error);
  }

  res.json({
    message: "Note Updated Successfully",
  });
};

// DELETE
const removeNote = async (req, res) => {
  const { error } = await notesService.deleteNote(req.params.id);

  if (error) {
    return res.status(500).json(error);
  }

  res.json({
    message: "Note Deleted Successfully",
  });
};

module.exports = {
  getNotes,
  createNote,
  editNote,
  removeNote,
};