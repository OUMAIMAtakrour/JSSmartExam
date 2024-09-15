const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.get("/create", testController.createTestForm);

router.post("/create", testController.createTest);

router.get("/", testController.getAllTests);

router.get("/:id", testController.getTestById);

router.put("/:id", testController.updateTest);

router.delete("/:id", testController.deleteTest);

module.exports = router;