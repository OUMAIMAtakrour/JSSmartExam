const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/auth", authRoutes);
app.get("/login", (req, res) => {
  res.render("pages/login"); 
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;