const StudentModel = require("../models/StudentModel");

let students = [
  {
    _id: 0,
    name: "Jefferson de Carvalho",
    course: "Sistemas de Informação",
    ira: 6.7,
  },
  { _id: 1, name: "Thiago Lins", course: "Ciência da Computação", ira: 9 },
  {
    _id: 2,
    name: "Marayah Sabelle",
    course: "Sistemas de Informação",
    ira: 10.0,
  },
];
let _id = 3;

class StudentService {
  static create(data) {
    let student = new StudentModel(_id++, data.name, data.course, data.ira);
    students.push(student);
    return student;
  }

  static search(_id) {
    for (let i = 0; i < students.length; i++) {
      if (students[i]._id == _id) {
        return students[i];
      }
    }
    return {};
  }

  static update(_id, data) {
    for (let s of students) {
      if (s._id == _id) {
        s.name = data.name;
        s.course = data.course;
        s.ira = data.ira;
        return s;
      }
    }
    return null;
  }

  static delete(_id) {
    for (let i = 0; i < students.length; i++) {
      if (students[i]._id == _id) {
        students.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  static list() {
    return students;
  }
}

module.exports = StudentService;
