const Subject = require("../models/subjectModel");

class SubjectController {
  static async getSubjectById(req, res) {
    try {
      const { id } = req.params;
      const subject = await Subject.findById(id);
      if (subject) {
        res.render("pages/subjectDetail", { subject });
      } else {
        res.status(404).render("error", { error: "Subject not found" });
      }
    } catch (err) {
      console.error("Error fetching subject:", err);
      res.status(500).render("error", { error: "Failed to fetch subject" });
    }
  }

  static async getAllSubjects(req, res) {
    try {
      const subjects = await Subject.findAll();
      res.render("pages/subject", { subjects: subjects });
    } catch (err) {
      console.error("Error fetching subjects:", err);
      res.status(500).render("error", { error: "Failed to fetch subjects" });
    }
  }

  static async createSubject(req, res) {
    try {
      const { subject_name, parent_subject_id } = req.body;
      await Subject.create(subject_name, parent_subject_id || null);
      res.redirect("/subject");
    } catch (err) {
      console.error("Error creating subject:", err);
      res.status(500).render("error", { error: "Failed to create subject" });
    }
  }

  static async updateSubject(req, res) {
    try {
      const { id } = req.params;
      const { subject_name, parent_subject_id } = req.body;
      await Subject.update(id, subject_name, parent_subject_id || null);
      res.redirect("/subject");
    } catch (err) {
      console.error("Error updating subject:", err);
      res.status(500).render("error", { error: "Failed to update subject" });
    }
  }

  static async deleteSubject(req, res) {
    try {
      const { id } = req.params;
      await Subject.delete(id);
      res.redirect("/subject");
    } catch (err) {
      console.error("Error deleting subject:", err);
      res.status(500).render("error", { error: "Failed to delete subject" });
    }
  }
}

module.exports = SubjectController;
