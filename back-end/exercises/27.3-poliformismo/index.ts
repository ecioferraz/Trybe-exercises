// import Person from "./classes/Person";
import Student from "./course/classes/Student";
import Subject from "./course/classes/Subject";
import Teacher from "./course/classes/Teacher";

const student1 = new Student('Marcia', new Date('1992/03/16'));
const subject1 = new Subject('Dance');
const teacher1 = new Teacher('Britney', new Date('1981/12/02'), 2000000, subject1);

student1.examsGrades = [10, 8, 9, 10];
student1.workpapersGrades = [10, 10];

console.log(student1);
console.log(student1.sumGrades());
console.log(student1.gradesAverage());
console.log(subject1);
console.log(teacher1);
