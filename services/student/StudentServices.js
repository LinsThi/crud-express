const StudentModel = require("../../models/student/StudentModel");

class StudentService {
  static list(req, res) {
    StudentModel.find().then((students) => {
      res.status(200).json(students);
    });
  }

  static create(req, res) {
    StudentModel.create(req.body).then((student) => {
      res.status(201).json(student);
    });
  }

  static search(req, res) {
    StudentModel.findById(req.params.id).then((student) => {
      res.status(200).json(student);
    });
  }

  static update(req, res) {
    StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (student) => {
        res.status(200).json(student);
      }
    );
  }

  static delete(req, res) {
    StudentModel.findByIdAndRemove(req.params.id).then((student) => {
      res.status(200).json(student);
    });
  }
}

module.exports = StudentService;
