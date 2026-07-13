const supabase = require("../config/supabase");

const getAttendance = async () => {
  return await supabase
    .from("attendance")
    .select("*")
    .order("subject");
};

const addAttendance = async (data) => {
  return await supabase
    .from("attendance")
    .insert([data]);
};

const updateAttendance = async (id, data) => {
  return await supabase
    .from("attendance")
    .update(data)
    .eq("id", id);
};

const deleteAttendance = async (id) => {
  return await supabase
    .from("attendance")
    .delete()
    .eq("id", id);
};

module.exports = {
  getAttendance,
  addAttendance,
  updateAttendance,
  deleteAttendance,
};