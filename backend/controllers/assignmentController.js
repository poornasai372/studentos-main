const assignmentService = require("../services/assignmentService");

const getAssignments = async (req, res) => {
  const { data, error } = await assignmentService.getAssignments();

  if (error) return res.status(500).json(error);

  res.json(data);
};

const createAssignment = async (req, res) => {
  const { data, error } =
    await assignmentService.addAssignment(req.body);

  if (error) return res.status(500).json(error);

  res.json({
    message: "Assignment Added Successfully",
    data,
  });
};

const editAssignment = async (req, res) => {
  const { error } =
    await assignmentService.updateAssignment(
      req.params.id,
      req.body
    );

  if (error) return res.status(500).json(error);

  res.json({
    message: "Assignment Updated",
  });
};

const removeAssignment = async (req, res) => {
  const { error } =
    await assignmentService.deleteAssignment(req.params.id);

  if (error) return res.status(500).json(error);

  res.json({
    message: "Assignment Deleted",
  });
};

module.exports = {
  getAssignments,
  createAssignment,
  editAssignment,
  removeAssignment,
};