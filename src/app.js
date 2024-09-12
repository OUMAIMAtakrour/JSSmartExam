const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const authRoutes = require("./routes/authRoutes");

const subjectRoutes = require("./routes/subjectRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/auth", authRoutes);
app.get("/login", (req, res) => {
  res.render("pages/login");
});
app.use("/subject", subjectRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




module.exports = app;
