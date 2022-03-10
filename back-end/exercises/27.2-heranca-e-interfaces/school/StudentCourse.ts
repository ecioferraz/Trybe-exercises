// class Student {
//   private _registration: number;
//   private _name: string;
//   private _grades: number[];
//   private _workpapers: number[];

//   constructor(
//     registration: number,
//     name: string,
//     // grades: number[],
//     // workpapers: number[],
//     ) {
//       this._registration = registration;
//       this._name = name;
//       this._grades = [];
//       this._workpapers = [];
//     }

//     get registration(): number {
//       return this._registration;
//     }

//     set registration(r: number) {
//       this._registration = r;
//     }

//     get name(): string {
//       return this._name;
//     }

//     set name(n: string) {
//       this._name = n;
//     }

//     get grades(): number[] {
//       return this._grades;
//     }

//     set grades(g: number[]) {
//       (g.length > 4) ? console.log('A pessoa estudante só pode possuir 4 notas de provas.') : this._grades = g;
//     }

//     get workpapers(): number[] {
//       return this._workpapers;
//     }

//     set workpapers(w: number[]) {
//       (w.length > 2) ? console.log('A pessoa estudante só pode possuir 2 notas de trabalho.') : this._workpapers = w;
//     }

//     sum() {
//       return [...this._grades, ...this._workpapers].reduce((acc, curr) => acc += curr);
//     }

//     average() {
//       const sumAllGrades = this.sum();
//       const divide = this._grades.length + this._workpapers.length;
//       return (sumAllGrades / divide).toFixed(2);
//     }
// }

// const student1 = new Student(123456789, 'Écio');

// student1.grades = [10, 8, 9, 10];
// student1.workpapers = [10, 10];

// console.log(student1);
// console.log(student1.sum());
// console.log(student1.average());
