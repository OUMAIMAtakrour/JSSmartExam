const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../config/database");

const { SECRET_KEY, TOKEN_EXPIRATION } = require("../config/jwt");

const { login } = require("../middleware/auth");

router.get("/", (req, res) => {
  res.send("using api route");
});

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const result = await pool.query('SELECT * FROM "users" WHERE email = $1', [email]);
//     const user = result.rows[0];

//     if (user && await bcrypt.compare(password, user.password_hash)) {
//       const token = jwt.sign(
//         {
//           userId: user.user_id,
//           role: user.roles,
//         },
//         SECRET_KEY,
//         { expiresIn: TOKEN_EXPIRATION }
//       );

//       res.json({ token });
//     } else {
//       res.status(401).json({ message: "Invalid credentials" });
//     }
//   } catch (err) {
//     console.error("Error during login:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

module.exports = router;
