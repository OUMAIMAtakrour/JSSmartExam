const express = require("express");
const router = express.Router();


const questionController = require("../controllers/questionController");

router.get("/getQuestions", questionController.getAllQestion);
router.post("/setQuestion", questionController.setQestion);
router.post("/deletQuestion", questionController.deletQestion);
router.post("/updateQuestion", questionController.updateQestion);

module.exports = router