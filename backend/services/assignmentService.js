const supabase = require("../config/supabase");

const getAssignments = async () => {
  return await supabase
    .from("assignments")
    .select("*")
    .order("due_date", { ascending: true });
};

const addAssignment = async (data) => {
  return await supabase
    .from("assignments")
    .insert([data]);
};

const updateAssignment = async (id, data) => {
  return await supabase
    .from("assignments")
    .update(data)
    .eq("id", id);
};

const deleteAssignment = async (id) => {
  return await supabase
    .from("assignments")
    .delete()
    .eq("id", id);
};

module.exports = {
  getAssignments,
  addAssignment,
  updateAssignment,
  deleteAssignment,
};