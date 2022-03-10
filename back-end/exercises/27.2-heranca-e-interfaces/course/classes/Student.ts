import Person from "./Person";

export default class Student extends Person {
  private _registration: string;
  private _grades: number[] = [];
  private _workpapers: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._registration = this.generateRegistration();
  }

  get registration(): string {
    return this._registration;
  }

  set registration(r: string) {
    (r.length < 16) ? console.log('A matrícula deve possuir no mínimo 16 caracteres.') : this._registration = r;
  }

  get grades(): number[] {
    return this._grades;
  }

  set grades(g: number[]) {
    (g.length > 4) ? console.log('A pessoa estudante só pode possuir 4 notas de provas.') : this._grades = g;
  }

  get workpapers(): number[] {
    return this._workpapers;
  }

  set workpapers(w: number[]) {
    (w.length > 2) ? console.log('A pessoa estudante só pode possuir 2 notas de trabalho.') : this._workpapers = w;
  }

  sum() {
    return [...this._grades, ...this._workpapers].reduce((acc, curr) => acc += curr);
  }

  average() {
    const sumAllGrades = this.sum();
    const divide = this._grades.length + this._workpapers.length;
    return (sumAllGrades / divide).toFixed(2);
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}
