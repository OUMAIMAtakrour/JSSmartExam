const express = require("express");
const session = require("express-session");
const path = require("path");
const methodOverride = require("method-override");
const multer = require("multer");

const app = express();

const authRoutes = require("./routes/authRoutes");
const subjectRoutes = require("./routes/subjectRoutes");
const questionRoutes = require("./routes/questionRoutes");
const assignTestToStudentRoutes = require("./routes/assignTestToStudentRoutes");
const userRoutes = require("./routes/userRoutes");
const levelRoutes = require("./routes/levelRoutes");
const testRoutes = require("./routes/testRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use("/", authRoutes);
app.use("/subject", subjectRoutes);
app.use("/question", questionRoutes);
app.use("/test", assignTestToStudentRoutes);
app.use("/test", testRoutes);
app.use("/users", userRoutes);
app.use("/levels", levelRoutes);

app.get("/login", (req, res) => {
  res.render("pages/login");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;