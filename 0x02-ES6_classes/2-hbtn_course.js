export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(nameType) {
    if (typeof nameType !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nameType;
  }

  set length(lengthType) {
    if (typeof lengthType !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = lengthType;
  }

  set students(CurrentStudents) {
    if (typeof CurrentStudents === 'object') {
      for (const student in CurrentStudents) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array');
        }
      }
    } else {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = CurrentStudents;
  }
}
