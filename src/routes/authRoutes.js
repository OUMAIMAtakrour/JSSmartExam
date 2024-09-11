const express = require("express");
const router = express.Router();
const { login } = require('../controllers/authController');

router.post("/login", login);

router.get("/login", (req, res) => {
  res.send("Login route is set up. Use POST method to login.");
});

module.exports = router;