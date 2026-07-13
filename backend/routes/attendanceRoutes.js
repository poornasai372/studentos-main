const express = require("express");

const router = express.Router();

const {
  getAttendance,
  createAttendance,
  editAttendance,
  removeAttendance,
} = require("../controllers/attendanceController");

router.get("/", getAttendance);
router.post("/", createAttendance);
router.put("/:id", editAttendance);
router.delete("/:id", removeAttendance);

module.exports = router;