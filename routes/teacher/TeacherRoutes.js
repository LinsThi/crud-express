var express = require("express");
var router = express.Router();
var teacherService = require("../../services/teacher/TeacherServices");

router.get("/list", function (req, res, next) {
  teacherService.list(req, res);
});

router.post("/create", function (req, res, next) {
  teacherService.create(req, res);
});

router.put("/update/:id", function (req, res, next) {
  teacherService.update(req, res);
});

router.delete("/delete/:id", function (req, res, next) {
  teacherService.delete(req, res);
});

router.get("/search/:id", function (req, res, next) {
  teacherService.search(req, res);
});

module.exports = router;
