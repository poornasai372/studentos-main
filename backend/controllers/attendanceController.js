const attendanceService = require("../services/attendanceService");

const getAttendance = async (req, res) => {
  const { data, error } = await attendanceService.getAttendance();

  if (error) return res.status(500).json(error);

  res.json(data);
};

const createAttendance = async (req, res) => {
  const { data, error } = await attendanceService.addAttendance(req.body);

  if (error) return res.status(500).json(error);

  res.status(201).json({
    message: "Attendance Added Successfully",
    data,
  });
};

const editAttendance = async (req, res) => {
  const { error } = await attendanceService.updateAttendance(
    req.params.id,
    req.body
  );

  if (error) return res.status(500).json(error);

  res.json({
    message: "Attendance Updated",
  });
};

const removeAttendance = async (req, res) => {
  const { error } = await attendanceService.deleteAttendance(req.params.id);

  if (error) return res.status(500).json(error);

  res.json({
    message: "Attendance Deleted",
  });
};

module.exports = {
  getAttendance,
  createAttendance,
  editAttendance,
  removeAttendance,
};