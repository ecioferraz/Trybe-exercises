import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examGrades: number[] = [];
  private _paperGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get examGrades(): number[] {
    return this._examGrades;
  }
  public set examGrades(value: number[]) {
    if (value.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    this._examGrades = value;
  }

  public get paperGrades(): number[] {
    return this._paperGrades;
  }
  
  public set paperGrades(value: number[]) {
    if (value.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalho.');
    this._paperGrades = value;
  }

  public sumGrades(): number {
    return [...this.examGrades, ...this.paperGrades].reduce((sum, grade) => sum += grade);
  }

  public gradesAverage(): number {
    const gradesSum = this.sumGrades();
    const divisor = this.examGrades.length + this.paperGrades.length;
    return Number((gradesSum / divisor).toFixed(2));
  }

  public generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}

const student1 = new Student('Écio', new Date('1991/07/24'));

console.log(student1);
console.log(student1.enrollment);
console.log(student1.name);
student1.name = 'test';
console.log(student1.name);
