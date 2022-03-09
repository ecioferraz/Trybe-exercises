export default class Student {
  constructor(
    private _enrollment: string,
    private _name: string,
    private _examGrades: number[] = [],
    private _paperGrades: number[] = []
  ) { }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
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

  public sumGrades(examGrades: number[], paperGrades: number[]) {
    return [...examGrades, ...paperGrades].reduce((sum, grade) => sum += grade);
  }

  public gradesAverage() {
    const gradesSum = this.sumGrades(this.examGrades, this.paperGrades);
    const divisor = this.examGrades.length + this.paperGrades.length;
    return (gradesSum / divisor).toFixed(2);
  }
}

const student1 = new Student('123456789', 'Écio');

console.log(student1);
console.log(student1.enrollment);
console.log(student1.name);
student1.name = 'test';
console.log(student1.name);
