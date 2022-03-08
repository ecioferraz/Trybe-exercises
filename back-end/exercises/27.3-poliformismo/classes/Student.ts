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

  // get examsGrades(): number[] {
  //   return this._examsGrades;
  // }

  // set examsGrades(eG: number[]) {
  //   (eG.length > 4) ? console.log('A pessoa estudante só pode possuir 4 notas de provas.') : this._examsGrades = eG;
  // }

  // get workpapersGrades(): number[] {
  //   return this._workpapersGrades;
  // }

  // set workpapersGrades(wG: number[]) {
  //   (wG.length > 2) ? console.log('A pessoa estudante só pode possuir 2 notas de trabalho.') : this._workpapersGrades = wG;
  // }

  // sumGrades() {
  //   return [...this._examsGrades, ...this._workpapersGrades].reduce((acc, curr) => acc += curr);
  // }

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
