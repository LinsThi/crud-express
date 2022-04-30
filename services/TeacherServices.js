const TeacherModel = require("../models/TeacherModel");

let teachers = [
  {
    _id: 0,
    name: "Aragão",
    university: "Matemática",
    degree: "Doutorado",
  },
  {
    _id: 1,
    name: "Paulo Henrique",
    university: "Ciência da Computação",
    degree: "Doutorado",
  },
  {
    _id: 2,
    name: "Paulo de Tarso",
    university: "Ciência da Computação",
    degree: "Doutorado",
  },
];
let _id = 3;

class TeacherService {
  static create(data) {
    let teacher = new TeacherModel(
      _id++,
      data.name,
      data.university,
      data.degree
    );
    teachers.push(teacher);
    return teacher;
  }

  static search(_id) {
    for (let i = 0; i < teachers.length; i++) {
      if (teachers[i]._id == _id) {
        return teachers[i];
      }
    }
    return {};
  }

  static update(_id, data) {
    for (let t of teachers) {
      if (t._id == _id) {
        t.name = data.name;
        t.course = data.course;
        t.ira = data.ira;
        return t;
      }
    }
    return null;
  }

  static delete(_id) {
    for (let i = 0; i < teachers.length; i++) {
      if (teachers[i]._id == _id) {
        teachers.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  static list() {
    return teachers;
  }
}

module.exports = TeacherService;
