const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const tokenRefreshMiddleware = require("../middleware/tokenRefreshMiddleware");

router.use(verifyToken);
router.use(tokenRefreshMiddleware);

router.get("/", (req, res) => {
  res.json({
    message: "This is a protected route",
    userId: req.userId,
    userRole: req.userRole,
  });
});

router.get("/profile", (req, res) => {
  res.json({
    message: "This is your profile",
    userId: req.userId,
    userRole: req.userRole,
  });
});

module.exports = router;