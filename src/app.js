const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const subjectRoutes = require("./routes/subjectRoutes");
<<<<<<< HEAD
const questionRoutes = require("./routes/questionRoutes");
const assignTestToStudentRoutes = require("./routes/assignTestToStudentRoutes");

=======
const userRoutes = require("./routes/userRoutes");
const levelRoutes = require("./routes/levelRoutes");
const multer = require('multer');
>>>>>>> omar





// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });
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
app.use("/test", assignTestToStudentRoutes);

router.get('/users/:id', UserController.show);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

=======
app.use("/subject", subjectRoutes);
app.use("/users", userRoutes);
app.use("/levels", levelRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
>>>>>>> omar
});




module.exports = app;
