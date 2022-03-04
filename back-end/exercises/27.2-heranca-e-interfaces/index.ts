import Person from "./classes/Person";
import Student from "./classes/Student";
import Subject from "./classes/Subject";
import Teacher from "./classes/Teacher";

const person1 = new Person('Écio', new Date('1991/07/24'));
const student1 = new Student('Britney', new Date('1981/12/02'));
const subject1 = new Subject('Math');
const subject2 = new Subject('History');
const subject3 = new Subject('Philosophy');
const teacher1 = new Teacher('Marcia', new Date('1992/03/16'), 2003, subject1);


student1.grades = [10, 8, 9, 10];
student1.workpapers = [10, 10];

console.log(person1);
console.log(student1);
console.log(student1.sum());
console.log(student1.average());
console.log(subject1);
console.log(subject2);
console.log(subject3);
console.log(teacher1);
