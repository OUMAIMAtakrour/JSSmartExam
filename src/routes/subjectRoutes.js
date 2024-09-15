const express = require("express");
const router = express.Router();
const SubjectController = require("../controllers/subjectController");
// const { verifyToken } = require("../middleware/auth");

// router.use(verifyToken);

router.get("/", SubjectController.getAllSubjects);

router.get("/:id", SubjectController.getSubjectById);

router.post("/", SubjectController.createSubject);

router.put("/:id", SubjectController.updateSubject);

router.delete("/:id", SubjectController.deleteSubject);

module.exports = router;
