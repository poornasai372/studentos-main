const express = require("express");

const router = express.Router();

const { askAI } = require("../controllers/aiController");

router.post("/", (req, res, next) => {
  console.log("✅ AI Route Hit");
  console.log(req.body);
  next();
}, askAI);

module.exports = router;