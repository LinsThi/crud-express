const TeacherModel = require("../../models/teacher/TeacherModel");

class TeacherService {
  static list(req, res) {
    TeacherModel.find().then((teachers) => {
      res.status(200).json(teachers);
    });
  }

  static create(req, res) {
    TeacherModel.create(req.body).then((teacher) => {
      res.status(201).json(teacher);
    });
  }

  static search(req, res) {
    TeacherModel.findById(req.params.id).then((teacher) => {
      res.status(200).json(teacher);
    });
  }

  static update(req, res) {
    TeacherModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (teacher) => {
        res.status(200).json(teacher);
      }
    );
  }

  static delete(req, res) {
    TeacherModel.findByIdAndRemove(req.params.id).then((teacher) => {
      res.status(200).json(teacher);
    });
  }
}

module.exports = TeacherService;
