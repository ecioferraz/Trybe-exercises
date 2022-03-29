export default abstract class Person {
  private _name: string = String();
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(n: string) {
    this.validateName(n);
    this._name = n;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(d: Date) {
    this.validateBirthDate(d);
    this._birthDate = d;
  }
  
  static getAge(d: Date): number {
    const diff = Math.abs(new Date().getTime() - d.getTime());
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }
  
  private validateName(n: string): void {
    if (n.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  private validateBirthDate(d: Date): void {
    if (d.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(d) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}
