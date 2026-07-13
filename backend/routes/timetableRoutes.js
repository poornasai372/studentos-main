const express = require("express");

const router = express.Router();

const {
  getTimetable,
  createClass,
  editClass,
  removeClass,
} = require("../controllers/timetableController");

router.get("/", getTimetable);

router.post("/", createClass);

router.put("/:id", editClass);

router.delete("/:id", removeClass);

module.exports = router;