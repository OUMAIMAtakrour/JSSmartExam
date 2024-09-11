const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');

router.get('/', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.userId, userRole: req.userRole });
});

module.exports = router;
