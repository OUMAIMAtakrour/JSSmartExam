const jwt = require("jsonwebtoken");
const { SECRET_KEY, TOKEN_EXPIRATION } = require("../config/jwt");

const tokenRefreshMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token && req.userId) {
    const newToken = jwt.sign(
      { userId: req.userId, role: req.userRole },
      SECRET_KEY,
      { expiresIn: TOKEN_EXPIRATION }
    );

    res.setHeader("X-New-Token", newToken);
  }

  next();
};

module.exports = tokenRefreshMiddleware;
