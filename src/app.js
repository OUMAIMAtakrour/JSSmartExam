const express = require("express");
const app = express();
const router = express.Router();
const session = require("express-session");
const path = require("path");

const methodOverride = require("method-override");
const authRoutes = require("./routes/authRoutes"); 
const subjectRoutes = require("./routes/subjectRoutes");
const questionRoutes = require("./routes/questionRoutes");
const assignTestToStudentRoutes = require("./routes/assignTestToStudentRoutes");

const userRoutes = require("./routes/userRoutes");
const levelRoutes = require("./routes/levelRoutes");
const multer = require('multer');





// Set up multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "..", "views"));


app.use(express.static(path.join(__dirname, "../public")));
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", authRoutes);

app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.use("/subject", subjectRoutes);

app.use("/question", questionRoutes);
app.use("/test", assignTestToStudentRoutes);

router.get('/users/:id', UserController.show);


app.use("/subject", subjectRoutes);
app.use("/users", userRoutes);
app.use("/levels", levelRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
