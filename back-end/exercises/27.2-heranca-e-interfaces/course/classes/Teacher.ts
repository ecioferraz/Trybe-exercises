import { Employee } from "../interfaces";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration: string = String();
  private _salary: number = Number();
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._subject = subject;
    this.salary = salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(s: Subject) {
    this._subject = s;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(r: string) {
    (r.length < 16) ? console.log('O registro deve possuir no mínimo 16 caracteres.') : this._registration = r;
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

  generateRegistration(): string {
      const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

      return `PRF${randomStr}`;
  }
}