const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("using api route");
});

router.get("/login", (req, res) => {
  res.render("pages/login");
});

module.exports = router;
