const supabase = require("../config/supabase");

const getAllNotes = async () => {
  return await supabase
    .from("notes")
    .select("*")
    .order("created_at", { ascending: false });
};

const addNote = async (noteData) => {
  return await supabase
    .from("notes")
    .insert([noteData]);
};

const updateNote = async (id, noteData) => {
  return await supabase
    .from("notes")
    .update(noteData)
    .eq("id", id);
};

const deleteNote = async (id) => {
  return await supabase
    .from("notes")
    .delete()
    .eq("id", id);
};

module.exports = {
  getAllNotes,
  addNote,
  updateNote,
  deleteNote,
};