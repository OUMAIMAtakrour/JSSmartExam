const express = require("express");
const router = express.Router();
const assignTestToStudentController = require("../controllers/assignTestToStudentController");


router.post("/assignTest", assignTestToStudentController.assignTest);

module.exports = router