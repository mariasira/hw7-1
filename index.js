const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

const averageGradeOfStudent = (student) => {
    return student.marks.reduce((sum, currentGrade) => sum + currentGrade) / student.marks.length;
}
for (const student of students) {
   console.log(`${student.name}'s average grade is ${averageGradeOfStudent(student)}`);
}

const averageSumOfGrades = students.reduce((sum, student) => {
   return sum + averageGradeOfStudent(student);
}, 0);

const averageOfStudents = averageSumOfGrades / students.length;
console.log(`average grade between students is ${averageOfStudents}`)
