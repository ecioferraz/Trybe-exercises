import { IEnrollable } from "../interfaces";
import Person from "./Person";

export default class Employee extends Person implements IEnrollable {
  private _enrollment: string = String();
  private _salary: number = Number();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this._salary = salary;
    this._admissionDate = new Date();
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(e: string) {
    (e.length < 16) ? console.log('O registro deve possuir no mínimo 16 caracteres.') : this._enrollment = e;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(s: number) {
    (s < 0) ? console.log('O salário não pode ser negativo.') : this._salary = s;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(aD: Date) {
    (aD.getTime() > new Date().getTime()) ? console.log('A data de admissão não pode ser uma data no futuro.') : this._admissionDate = aD;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FUNC${randomStr}`;
}
}
