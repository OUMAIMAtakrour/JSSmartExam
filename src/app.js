const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const subjectRoutes = require("./routes/subjectRoutes");
const questionRoutes = require("./routes/questionRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/login", (req, res) => {
  res.render("pages/login");
});
<<<<<<< HEAD
app.use("/subject", subjectRoutes);
app.use("/question", questionRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
=======
router.get('/users/:id', UserController.show);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
>>>>>>> omar
});




module.exports = app;
