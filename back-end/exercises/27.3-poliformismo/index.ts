import Person from "./school/Person";
import Student from "./school/Student";
import Subject from "./school/Subject";
import Teacher from "./school/Teacher";

const person1 = new Person('Écio', new Date('1991/07/24'));
const student1 = new Student('Marcia', new Date('1992/03/16'));
const subject1 = new Subject('Dance');
const teacher1 = new Teacher('Britney', new Date('1981/12/02'), 2000, subject1);


student1.examGrades = [10, 8, 9, 10];
student1.paperGrades = [10, 10];

console.log(person1);
console.log(student1);
console.log(student1.sumGrades());
console.log(student1.gradesAverage());
console.log(subject1);
console.log(teacher1);
