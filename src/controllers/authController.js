const jwt = require("jsonwebtoken");
const pool = require("../config/database");
const { SECRET_KEY, TOKEN_EXPIRATION } = require("../config/jwt");

const login = async (req, res) => {
  const { email, password } = req.body;

  console.log('Email:', email);
  console.log('Password:', password);

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const result = await pool.query('SELECT * FROM "users" WHERE email = $1', [
      email,
    ]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (user.password === password) {
      const token = jwt.sign(
        {
          userId: user.user_id,
          role: user.roles,
        },
        SECRET_KEY,
        { expiresIn: TOKEN_EXPIRATION }
      );

      return res.json({ token });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

module.exports = { login };
