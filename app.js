var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var studentRoutes = require("./routes/StudentRoute");
var teacherRoutes = require("./routes/TeacherRoute");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//permissoes livres sem qeustao de segurança
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/crud/student", studentRoutes); //caminho total
app.use("/crud/teacher", teacherRoutes); //caminho total

module.exports = app;
