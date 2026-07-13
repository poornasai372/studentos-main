const timetableService = require("../services/timetableService");

// GET
const getTimetable = async (req, res) => {
  try {
    const data = await timetableService.getAllClasses();
    res.status(200).json(data);
  } catch (err) {
    console.error("GET Timetable Error:", err);
    res.status(500).json({
      message: err.message,
    });
  }
};

// POST
const createClass = async (req, res) => {
  try {
    const data = await timetableService.addClass(req.body);

    res.status(201).json({
      message: "Class Added Successfully",
      data,
    });
  } catch (err) {
    console.error("POST Timetable Error:", err);
    res.status(500).json({
      message: err.message,
    });
  }
};

// PUT
const editClass = async (req, res) => {
  try {
    const data = await timetableService.updateClass(
      req.params.id,
      req.body
    );

    res.status(200).json({
      message: "Class Updated",
      data,
    });
  } catch (err) {
    console.error("PUT Timetable Error:", err);
    res.status(500).json({
      message: err.message,
    });
  }
};

// DELETE
const removeClass = async (req, res) => {
  try {
    await timetableService.deleteClass(req.params.id);

    res.status(200).json({
      message: "Class Deleted",
    });
  } catch (err) {
    console.error("DELETE Timetable Error:", err);
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getTimetable,
  createClass,
  editClass,
  removeClass,
};