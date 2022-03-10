import { IEnrollable } from "../interfaces";
import EvaluationResult from "./EvaluationResult";
import Person from "./Person";

export default class Student extends Person implements IEnrollable {
  private _enrollment: string;
  private _evaluationsResult: EvaluationResult[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._evaluationsResult = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(e: string) {
    (e.length < 16) ? console.log('A matrícula deve possuir no mínimo 16 caracteres.') : this._enrollment = e;
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResult;
  }

  sumGrades(): number {
    return [...this._evaluationsResult].reduce((acc, curr) => acc + curr, 0);
  }

  // gradesAverage() {
  //   const sumAllGrades = this.sumGrades();
  //   const divisor = this._examsGrades.length + this._workpapersGrades.length;
  //   return (sumAllGrades / divisor).toFixed(2);
  // }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}
