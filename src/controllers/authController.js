const User = require("../models/authModel");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

exports.showLoginForm = (req, res) => {
  res.render("pages/login", { error: null });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(400).render("pages/login", { error: "User not found" });
    }

    if (password !== user.password) {
      return res
        .status(400)
        .render("pages/login", { error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.user_id, role: user.roles }, JWT_SECRET, {
      expiresIn: "1h",
    });
    req.session.token = token;

    if (user.roles === "mentor") {
      res.redirect("/users");
    } else if (user.roles === "student") {
      res.redirect("/dashboard");
    } else {
      res.status(403).render("pages/login", { error: "Invalid user role" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).render("pages/login", { error: "Server error" });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.redirect("/login");
  });
};
