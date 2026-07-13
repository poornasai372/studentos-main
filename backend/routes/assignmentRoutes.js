const express = require("express");

const router = express.Router();

const {
  getAssignments,
  createAssignment,
  editAssignment,
  removeAssignment,
} = require("../controllers/assignmentController");

router.get("/", getAssignments);
router.post("/", createAssignment);
router.put("/:id", editAssignment);
router.delete("/:id", removeAssignment);

module.exports = router;