const express = require("express");
const router = express.Router();
const testController = require("../controllers/testController");

router.get("/create", testController.createTestForm);
router.post("/create", testController.createTest);
router.get('/', testController.getAllTests);
router.get("/:id", testController.getTestById);
router.post("/:id/update", testController.updateTest);
router.post("/:id/delete", testController.deleteTest);

module.exports = router;
