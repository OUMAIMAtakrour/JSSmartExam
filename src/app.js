const express = require("express");
const app = express();
const apiRoutes = require("./routes/index");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");


app.get("/", (req, res) => {
  res.send("Hello World ha!");
});

app.get("/login", (req, res) => {
  res.render("pages/login"); 
});

app.get("/test", (req, res) => {
  res.send("Test route is working");
});

app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});