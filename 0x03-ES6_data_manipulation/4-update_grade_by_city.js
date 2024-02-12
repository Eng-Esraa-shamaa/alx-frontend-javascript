export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);
  for (const student of students) {
    student.grade = 'N/A';
  }
  const newStudents = students.map((student) => {
    const newStudent = student;
    for (const grade of newGrades) {
      if (newStudent.id === grade.studentId) {
        newStudent.grade = grade.grade;
      }
    }
    return newStudent;
  });
  return newStudents;
}
