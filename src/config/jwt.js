// const jwt = require("jsonwebtoken");

// const ACCESS_TOKEN_SECRET =
//   process.env.ACCESS_TOKEN_SECRET || "your_access_token_secret";
// const REFRESH_TOKEN_SECRET =
//   process.env.REFRESH_TOKEN_SECRET || "your_refresh_token_secret";
// const ACCESS_TOKEN_EXPIRATION = "15m";
// const REFRESH_TOKEN_EXPIRATION = "7d";

// function generateAccessToken(user) {
//   return jwt.sign(
//     { userId: user.user_id, role: user.roles },
//     ACCESS_TOKEN_SECRET,
//     {
//       expiresIn: ACCESS_TOKEN_EXPIRATION,
//     }
//   );
// }

// function generateRefreshToken(user) {
//   return jwt.sign({ userId: user.user_id }, REFRESH_TOKEN_SECRET, {
//     expiresIn: REFRESH_TOKEN_EXPIRATION,
//   });
// }

// function verifyAccessToken(token) {
//   return jwt.verify(token, ACCESS_TOKEN_SECRET);
// }

// function verifyRefreshToken(token) {
//   return jwt.verify(token, REFRESH_TOKEN_SECRET);
// }

// module.exports = {
//   ACCESS_TOKEN_SECRET,
//   REFRESH_TOKEN_SECRET,
//   ACCESS_TOKEN_EXPIRATION,
//   REFRESH_TOKEN_EXPIRATION,
//   generateAccessToken,
//   generateRefreshToken,
//   verifyAccessToken,
//   verifyRefreshToken,
// };
