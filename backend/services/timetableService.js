const supabase = require("../config/supabase");

const getAllClasses = async () => {
  const { data, error } = await supabase
    .from("timetable")
    .select("*")
    .order("day", { ascending: true });

  if (error) {
    console.error("Get Classes Error:", error);
    throw error;
  }

  return data;
};

const addClass = async (classData) => {
  const { data, error } = await supabase
    .from("timetable")
    .insert([classData])
    .select();

  if (error) {
    console.error("Add Class Error:", error);
    throw error;
  }

  return data;
};

const updateClass = async (id, classData) => {
  const { data, error } = await supabase
    .from("timetable")
    .update(classData)
    .eq("id", id)
    .select();

  if (error) {
    console.error("Update Class Error:", error);
    throw error;
  }

  return data;
};

const deleteClass = async (id) => {
  const { data, error } = await supabase
    .from("timetable")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error("Delete Class Error:", error);
    throw error;
  }

  return data;
};

module.exports = {
  getAllClasses,
  addClass,
  updateClass,
  deleteClass,
};